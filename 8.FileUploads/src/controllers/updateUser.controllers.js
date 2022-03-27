const express = require("express");

const User = require("../models/user.model");

const uploads = require("../midlewares/uploads");

const router = express.Router();

router.post("", uploads.single("profilePic"), async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({
      profilePic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

module.exports = router;