const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (options) => {
  //登陆校验中间件。
  return async (req, res, next) => {
    console.log(req.headers.authorization);
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    console.log(token);
    assert(token, 401, "请先登陆");

    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    );

    assert(id, 401, "请先登陆");

    req.user = await User.findById(id);
    assert(req.user, 401, "请先登陆");
    await next();
  };
};
