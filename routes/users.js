const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("This is User Router");
});

//update user
router.put("/:id", async (req, res) => {
  //用户自己更改或者是管理员更改
  if (
    req.body.userId === req.params.id ||
    req.body.isAdmin
  ) {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(
          req.body.password,
          10
        );
      } catch (err) {
        console.log("password");
        return res.status(500).json(err);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        }
      );
      res.status(200).json("Account has been updated");
    } catch (err) {
      console.log("Here ...........");
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("You can update only your account!");
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  //用户自己更改或者是管理员更改
  if (
    req.body.userId === req.params.id ||
    req.body.isAdmin
  ) {
    try {
      const user = await User.findByIdAndDelete({
        _id: req.params.id,
      });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("You can delete only your account!");
  }
});

//get a user

//follow a user

//unfollow a user

module.exports = router;
