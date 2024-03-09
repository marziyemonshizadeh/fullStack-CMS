const Validator = require("fastest-validator");
const v = new Validator();
const schema = {
  title: { type: "string", min: 4, max: 200 },
  price: { type: "string", min: 0, max: 5000000 },
};
const check = v.compile(schema);
export default check;
