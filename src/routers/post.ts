import express from "express";
import {
  createPost,
  getPost,
  getPosts,
  removePost,
  updatePost,
} from "../controllers/post";
const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.delete("/posts/:id", removePost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
export default router;
