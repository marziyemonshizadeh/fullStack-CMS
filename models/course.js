// course is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
const model = mongoose.model("course", schema);
export default model;
