// course is entity
const { default: mongoose } = require("mongoose");
const teachersModel = require("./teacher");
const commentsModel = require("./comment");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 200,
    index: true,
    unique: true,
    uppercase: true,
  },
  img: {
    type: String,
    minLength: 5,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    min: 0,
    max: 5000000,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
    required: true,
  },
});
schema.virtual("comments", {
  ref: "comment",
  localField: "_id",
  foreignField: "course",
});

const model = mongoose.models.course || mongoose.model("course", schema);
export default model;

//solved error by
// module.exports = mongoose.models.course || mongoose.model("course", schema);
