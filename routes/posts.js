module.exports = (app) => {
  const router = require("express").Router();
  const Post = require("../models/Post");
  const User = require("../models/User");
  const authMiddleware = require("./../middlerware/auth");

  //create a post
  router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //update a post
  /* 思路：在param 中上传post 的id 找到了post ，然后用post 的userId 和 实际的修改人对比 */
  router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
      } else {
        res
          .status(403)
          .json("you can update only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  //delete a post
  router.delete("/:id", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    try {
      const post = await Post.findById(req.params.id);

      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res
          .status(403)
          .json("you can delete only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //like and dislike a post
  router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({
          $push: {
            likes: req.body.userId,
          },
        });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({
          $pull: {
            likes: req.body.userId,
          },
        });
        res.status(200).json("The post has been disliked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //get a post

  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findOne({
        _id: req.params.id,
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //get a user portfolio
  router.get("/portfolio/:userId", async (req, res) => {
    try {
      const posts = await Post.find({
        userId: req.params.userId,
      });
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    }
  });

  //get timeline posts

  router.get("/timeline/now", async (req, res) => {
    try {
      const currentUser = await User.findById(req.user._id);

      const userPosts = await Post.find({
        userId: req.user._id,
      });

      console.log("userPosts", userPosts);
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({
            userId: friendId,
          });
        })
      );

      console.log("userPosts", friendPosts);

      res
        .status(200)
        .json(userPosts.concat(...friendPosts));
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // 获取互相关注人的信息
  /* 
  1.获得自己的 followings 
  2.看看自己的followings 的人当中的followinds 有没有自己 如果有则判断为互相关注的人。


  3.收集这里面所有人的ID，然后查找所有人的Posts，这里的Posts 就是朋友圈想要展示的内容
*/

  router.get("/friends/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(
        req.params.userId
      );
      let allFriendsId = [currentUser._id];

      //  自己的所有关注的人
      const allFriendsFollowings = await Promise.all(
        [...currentUser.followings].map((friendId) => {
          return User.findById(friendId);
        })
      );

      // 自己所有关注的人之中看看他们有没有关注自己，如果有就先放到一个数组中去。
      allFriendsFollowings.forEach((person) => {
        if (person.followings.includes(currentUser._id)) {
          allFriendsId.push(person._id);
        }
      });

      // 互为好友的人的Posts 也就是朋友圈。
      const allFriendsPosts = await Promise.all(
        allFriendsId.map((personId) => {
          return Post.find({ userId: personId });
        })
      );

      res.status(200).json(allFriendsPosts);
    } catch (error) {
      console.log(error);
    }
  });

  // get user's all posts

  router.get("/profile/:username", async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.params.username,
      });
      const posts = await Post.find({ userId: user._id });

      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // app.use("/api/posts");
  app.use("/api/posts", authMiddleware(), router);
};
