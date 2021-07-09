const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const multer = require("multer");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");

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
app.use(helmet());
app.use(morgan("common"));

//跨域使用;
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);

app.use(
  "/",
  express.static(path.join(__dirname, "public/home"))
);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to homepage");
// });

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images");
    },
    filename: function (req, file, cb) {
      const { fileName } = req.body;
      cb(null, fileName);
    },
  }),
});

app.post(
  "/api/upload",
  upload.single("file"),
  (req, res) => {
    try {
      return res.status(200).json("图片上传成功");
    } catch (error) {
      console.log(error);
    }
  }
);

app.listen(8800, () => {
  console.log("start to listen in 8800");
});
