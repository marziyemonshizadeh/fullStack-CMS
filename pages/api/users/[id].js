import usersModel from "@/models/user";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await usersModel.findOneAndDelete({ _id: id });
        return res.json({ message: "Course Removed Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "Course ID is not valid !!" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { username, role, purchases, email } = req.body;
    if (isValidObjectId(id)) {
      try {
        await usersModel.findOneAndUpdate(
          { _id: id },
          { username, role, purchases, email }
        );
        return res.json({ message: "user Updated Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "user ID is not valid !!" });
    }
  }
};

export default handler;
