import express from "express"
import blogController from "../Controller/blogController.js"

const router = express.Router();
// index
router.get("/", blogController.index)
// show
router.get("/:id", blogController.show)
// store
// update
// modify
// delete
router.delete("/:id", blogController.destroy)

export default router;