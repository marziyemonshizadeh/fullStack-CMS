// course is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // img: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  // teacher: {
  //   type: String,
  //   required: true,
  // },
});

//have error
const model = mongoose.models.course || mongoose.model("course", schema);
export default model;

//solved error by
// module.exports = mongoose.models.course || mongoose.model("course", schema);
