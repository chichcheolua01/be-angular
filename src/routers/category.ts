import express from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category";

const router = express.Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", createCategory);

export default router;
