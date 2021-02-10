const express = require("express");
const auth = require("../middleware/adminAuth");
const router = express.Router();
const Admin = require("../model/admin");

router.post("/create", async (req, res) => {
  const admin = new Admin(req.body);
  try {
    await admin.save();
    const token = await admin.generateToken();
    res.send({ admin, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/chk", auth, async (req, res) => {
  res.send("Succesfull");
});

module.exports = router;
