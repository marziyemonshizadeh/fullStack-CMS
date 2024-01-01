const { default: mongoose } = require("mongoose");
const schema = mongoose.Schema({
  userName: {
    type: String,
    minLength: 3,
    maxLength: 12,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  purchases: {
    type: Number,
    default: 0,
    required: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
});

const model = mongoose.models.user || mongoose.model("user", schema);
export default model;
