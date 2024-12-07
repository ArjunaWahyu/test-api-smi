// routes/dataRoutes.js
const express = require("express");
const {
  createData,
  getAllData,
  updateData,
  deleteData,
} = require("../controllers/dataController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/", protect, createData);
router.get("/", protect, getAllData);
router.put("/:id", protect, updateData);
router.delete("/:id", protect, deleteData);

module.exports = router;
