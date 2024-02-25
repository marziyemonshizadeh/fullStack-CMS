const { default: connectToDB } = require("@/utils/db");
import commentModel from "@/models/comment";

const handler = async (req, res) => {
  connectToDB();
  if (req.method === "GET") {
    console.log("req.query=", req.query);
    if (req.query.q) {
      const { q } = req.query;
      const comments = await commentModel.find({ body: { $regex: q } });
      res.json(comments);
    } else {
      const comments = await commentModel.find({});
      return res.json(comments);
    }
  } else if (req.method === "POST") {
    try {
      const { body } = req.body;
      // title.trim() === '' mosavi ba !title.trim()
      if (!body.trim()) {
        return res.status(422).json({ message: "body is required field !!!" });
      }
      await commentModel.create({ body });
      return res.status(201).json({ message: "teacher created successfully" });
    } catch (err) {
      return res.status(500).json({ message: "internal server error !!!" });
    }
  }
};
export default handler;
