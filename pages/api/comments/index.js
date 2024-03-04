const { default: connectToDB } = require("@/utils/db");
import commentModel from "@/models/comment";
// const coursesModel = require("../../../models/course");

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    console.log("req.query=", req.query);
    if (req.query.q) {
      const { q } = req.query;
      const comments = await commentModel.find({ body: { $regex: q } });
      res.json(comments);
    } else {
      const comments = await commentModel
        .find({}, "-__v")
        .populate("course", "-__v");
      return res.json(comments);
    }
  } else if (req.method === "POST") {
    try {
      const { body, course } = req.body;
      await commentModel.create({ body, course });
      return res.status(201).json({ message: "comment created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "internal server error !!!" });
    }
  }
};
export default handler;
