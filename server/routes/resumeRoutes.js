const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { getDocument } = require("pdfjs-dist/legacy/build/pdf.mjs");
const analyzeResume = require("../utils/atsAnalyzer");
const router = express.Router();

// Storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Read uploaded PDF
    const data = new Uint8Array(fs.readFileSync(req.file.path));

    // Load PDF
    const pdf = await getDocument({ data }).promise;

    let text = "";

    // Extract text page by page
    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo);

      const content = await page.getTextContent();

      text += content.items.map(item => item.str).join(" ");
      text += "\n";
    }

const analysis = analyzeResume(text);

res.json({

    success: true,

    filename: req.file.filename,

    text,

    score: analysis.score,

    skills: analysis.foundSkills,

    suggestions: analysis.suggestions

});
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;