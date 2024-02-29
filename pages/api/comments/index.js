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
  }
};
export default handler;
