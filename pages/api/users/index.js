const { default: connectToDB } = require("@/utils/db");
import usersModel from "@/models/user";
const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    console.log(req.query.q);

    if (req.query.q) {
      const { q } = req.query;
      const users = await usersModel.find({ userName: { $regex: q } });
      res.json(users);
    } else {
      const users = await usersModel.find({});
      return res.json(users);
    }
  } else if (req.method === "POST") {
    try {
      const {
        firstName,
        lastName,
        userName,
        password,
        role,
        purchases,
        email,
      } = req.body;
      if (!userName.trim() || userName.length < 4) {
        return res.status(422).json({ message: "userName is not valid !!" });
      }
      await usersModel.create({
        firstName,
        lastName,
        userName,
        password,
        role,
        purchases,
        email,
      });
      return res.status(201).json({ message: "user created successfully :))" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "UnKnown internal server error !!" });
    }
  }
};
export default handler;
