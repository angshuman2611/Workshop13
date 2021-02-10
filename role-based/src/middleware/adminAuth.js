const jwt = require("jsonwebtoken");
const Admin = require("../model/admin");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisismytoken");
    const admin = await Admin.findOne({
      _id: decoded._id,
    });
    if (!admin) {
      throw new Error();
    }
    req.admin = admin;
    next();
  } catch (e) {
    res.status(401).send("Unauthorized or not valid");
  }
};

module.exports = auth;
