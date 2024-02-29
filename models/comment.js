const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },

    // course: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Course",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.models.comment || mongoose.model("comment", schema);
export default model;
