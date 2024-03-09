import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndDelete({ _id: id });
        return res.json({ message: "Course Removed Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "Course ID is not valid !!" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { title, img, price, teacher } = req.body;
    if (isValidObjectId(id)) {
      try {
        await coursesModel.findOneAndUpdate(
          { _id: id },
          { title, img, price, teacher }
        );
        return res.json({ message: "Course Updated Successfully :))" });
      } catch (err) {
        return res.status(500).json({ message: "Internal server error !!" });
      }
    } else {
      return res.status(422).json({ message: "Course ID is not valid !!" });
    }
  } else if (req.method === "GET") {
    const { id } = req.query;
    const course = await coursesModel
      .findOne({ _id: id })
      .populate("comments")
      .lean();

    res.json(course);
  }
};

export default handler;
