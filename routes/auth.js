module.exports = (app) => {
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
    } catch (error) {
      res.status(500).json(error);
    }
  });

  // 登陆
  router.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        email: email,
      });

      if (!user) {
        return res.status(422).send({
          message: "用户不存在",
        });
      }
      const vaildPassword = await bcrypt.compare(
        password,
        user.password
      );

      if (!vaildPassword) {
        return res
          .status(422)
          .json({ message: "密码错误" });
      }

      const jwt = require("jsonwebtoken");
      console.log("here", app.get("secret"));
      const token = jwt.sign(
        { id: user._id },
        app.get("secret")
      );
      console.log("token", token);
      res.status(200).send({ token });
    } catch (error) {
      console.log("after");
      res.status(500).json(error);
    }
    /* 1.先搜索数据库有没有该账号，没有就直接返回错误信息
    2.用账户提供的密码用来跟第一步给的账号的用来在加密的bcrypt里面的做对比 对比成功说明这个账号和密码在数据库中是存在，返回信息给用户

  */
  });
  app.use("/api/auth", router);
};
