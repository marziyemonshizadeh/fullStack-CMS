const { default: connectToDB } = require("@/utils/db");
import userModel from "@/models/user";
import { generateToken, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }
  try {
    connectToDB();
    const { firstName, lastName, userName, password, email } = req.body;
    //1- validation
    if (
      firstName == undefined ||
      lastName == undefined ||
      userName == undefined ||
      password == undefined ||
      email == undefined
    ) {
      return res.status(422).json({ message: "Data is not valid !!" });
    }
    //2- is user exist
    const isUserExist = await userModel.findOne({
      $or: [{ userName, email }],
    });

    if (isUserExist) {
      return res
        .status(422)
        .json({ message: "This username or email exist already !!" });
    }
    //3- hash password
    const hashedPassword = await hashPassword(password);

    //4- generate token
    const token = generateToken({ email });
    console.log(token);
    //5- create
    const users = await userModel.find({});
    await userModel.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
      role: users.length > 0 ? "USER" : "ADMIN",
      purchases: 0,
      email,
    });
    //set cookie http only
    return res
      .setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24,
        })
      )
      .status(201)
      .json({ message: "User Created Successfully :))" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "UnKnown Internal Server Erorr !!" });
  }
};
export default handler;
