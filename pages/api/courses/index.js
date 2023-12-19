const { default: connectToDB } = require("@/utils/db");
import CourseModel from "@/models/course";
const handler = async (req, res) => {
  connectToDB();
  if (req.method === "POST") {
    try {
      const { title } = req.body;
      // title.trim() === '' mosavi ba !title.trim()
      if (!title.trim() || title.length < 8) {
        return res.status(422).json({ message: "title is not valid !!!" });
      }
      await CourseModel.create({ title });
      return res.status(201).json({ message: "course created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "internal server error !!!" });
    }
  }
};
export default handler;
