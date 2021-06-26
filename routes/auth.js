const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//注册
router.post("/register", async (req, res) => {
  try {
    //  加密密码
    const hashedPasswrod = await bcrypt.hash(
      req.body.password,
      10
    );

    // 用Model 来创建用户
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPasswrod,
    });

    // 把用户存入数据库
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(error);
  }
});

// 登陆
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).json("user not found");

    const vaildPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !vaildPassword &&
      res.status(400).json("password wrong");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
