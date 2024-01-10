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
  },
  {
    timestamps: true,
  }
);
const model = mongoose.models.teacher || mongoose.model("teacher", schema);
export default model;
