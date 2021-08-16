const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const helmet = require("helmet");
const morgan = require("morgan"); // 日记
const path = require("path");
const cors = require("cors");

const authMiddleware = require("./middlerware/auth");

const config = require("./config");

const multer = require("multer");
const MAO = require("multer-aliyun-oss");

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

//子路由
require("./routes/users")(app);
require("./routes/auth")(app);
require("./routes/posts")(app);
dotenv.config();
mongoose.connect(
  "mongodb://localhost:27017/social",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connect to mongoDB");
  }
);

//mindleware
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
// app.use(helmet());

//静态文件托管
app.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);

app.use(
  "/",
  express.static(path.join(__dirname, "public/home"))
);

// app.use("/api/posts", postRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to homepage");
// });

let upload = multer({
  // storage: multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "public/images");
  //   },
  //   filename: function (req, file, cb) {
  //     const { fileName } = req.body;
  //     cb(null, fileName);
  //   },
  // }),
  storage: MAO({
    config: {
      region: "oss-cn-shenzhen",
      accessKeyId: "LTAI5tCEx9UPFvBk8afgpb4w",
      accessKeySecret: "JcT86VGbcD1bOaM8gsrQDJpcqjpDXt",
      bucket: "fujix",
    },
  }),
});

app.post(
  "/api/upload",
  authMiddleware(),
  upload.single("file"),
  (req, res) => {
    try {
      const url = req.file.url;
      console.log("aliyun-oss 的图片地址", url);
      return res.status(200).json(url);
    } catch (error) {
      console.log(error);
    }
  }
);

app.listen(8800, () => {
  console.log("start to listen in 3000");
});

module.exports = app;
