const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

//get a user

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
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
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(
        req.body.userId
      );
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: { followers: req.body.userId },
        });
        await currentUser.updateOne({
          $push: { followings: req.params.id },
        });
        res.status(200).json("user have been followed");
      } else {
        res
          .status(403)
          .json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      console.log(req.body.userId);
      console.log();
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(
        req.body.userId
      );
      // console.log("88line .....", user);
      console.log("89line .....", currentUser);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: { followers: req.body.userId },
        });
        await currentUser.updateOne({
          $pull: { followings: req.body.userId },
        });
        res.status(200).json("user have been unfollowed");
      } else {
        res
          .status(403)
          .json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = router;
