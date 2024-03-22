const { default: mongoose } = require("mongoose");
const schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    minLength: 3,
    maxLength: 12,
    required: true,
  },
  // role admin or user . you can use enum
  role: {
    type: String,
    required: true,
  },
  purchases: {
    type: Number,
    // default: 0,
    // required: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
});

const model = mongoose.models.user || mongoose.model("user", schema);
export default model;
