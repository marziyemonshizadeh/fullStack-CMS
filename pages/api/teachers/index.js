const { default: connectToDB } = require("@/utils/db");
import TeacherModel from "@/models/teacher";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    console.log("req.query=", req.query);
    if (req.query.q) {
      const { q } = req.query;
      const teachers = await TeacherModel.find({ name: { $regex: q } });
      res.json(teachers);
    } else {
      const teachers = await TeacherModel.find({});
      return res.json(teachers);
    }
  } else if (req.method === "POST") {
    try {
      const { name, email, course } = req.body;
      // title.trim() === '' equal !title.trim()
      if (!name.trim() || name.length < 5) {
        return res.status(422).json({ message: "title is not valid !!!" });
      }
      await TeacherModel.create({ name, email, course });
      return res.status(201).json({ message: "teacher created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "internal server error !!!" });
    }
  }
};
export default handler;
