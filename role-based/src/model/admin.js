const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

adminSchema.methods.generateToken = async function () {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, "thisismytoken");
  await admin.save();
  return token;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
