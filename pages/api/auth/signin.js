const { default: connectToDB } = require("@/utils/db");
import userModel from "@/models/user";
import { generateToken, verifyPassword } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }
  try {
    connectToDB();
    const { identifier, password } = req.body;
    //1- validation
    if (!identifier.trim() || !password.trim()) {
      return res.status(422).json({ message: "Data is not valid !!" });
    }
    //2- is user exist
    const user = await userModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found !!" });
    }

    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      return res
        .status(422)
        .json({ message: "username or password is not correct !!" });
    }

    const token = generateToken({ email: user.email });

    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24,
        })
      )
      .status(200)
      .json({ message: "User Logged In Successfully :))" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "UnKnown Internal Server Erorr !!" });
  }
};
export default handler;
