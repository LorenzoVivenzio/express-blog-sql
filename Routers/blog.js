import express from "express"
import blogController from "../Controller/blogController.js"

const router = express.Router();
// index
router.get("/", blogController.index)
// show
// store
// update
// modify
// delete

export default router;