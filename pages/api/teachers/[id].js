import teachersModel from "@/models/teacher";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await teachersModel.findOneAndDelete({ _id: id });
        return res.json({ message: "teacher Removed Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "teacher ID is not valid !!" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { name, email } = req.body;
    if (isValidObjectId(id)) {
      try {
        await teachersModel.findOneAndUpdate({ _id: id }, { name, email });
        return res.json({ message: "teacher Updated Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "teacher ID is not valid !!" });
    }
  }
};

export default handler;
