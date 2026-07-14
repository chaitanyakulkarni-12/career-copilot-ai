const express = require("express");
const multer = require("multer");

const router = express.Router();

// Save uploaded files inside uploads/
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// POST /api/resume/upload
router.post("/upload", upload.single("resume"), (req, res) => {

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  res.json({
    success: true,
    message: "Resume uploaded successfully",
    filename: req.file.filename,
  });

});

module.exports = router;