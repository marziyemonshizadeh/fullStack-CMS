import commentsModel from "@/models/comment";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await commentsModel.findOneAndDelete({ _id: id });
        return res.json({ message: "comment Removed Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "comment ID is not valid !!" });
    }
  }
};

export default handler;
