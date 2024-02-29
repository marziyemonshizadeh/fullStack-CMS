const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 200,
      index: true,
      unique: true,
      uppercase: true,
    },
    email: {
      type: String,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.models.teacher || mongoose.model("teacher", schema);
export default model;
