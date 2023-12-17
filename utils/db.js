const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    // if connected
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/fullstack-cms");
      console.log("connected to db successfully :)");
    }
  } catch (err) {
    console.log("connectToDB err => ", err);
  }
};
export default connectToDB;
