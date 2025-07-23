const express = require('express');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const Participant = require('../models/Participant');
const router = express.Router();

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.fields([
  { name: 'fotoKTP', maxCount: 1 },
  { name: 'fotoSelfie', maxCount: 1 },
]), async (req, res) => {
  try {
    const { body, files } = req;

    const fotoKTP = await cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) throw error;
        return result.secure_url;
      }
    );

    const fotoSelfie = await cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) throw error;
        return result.secure_url;
      }
    );

    const newData = new Participant({
      ...body,
      fotoKTPUrl: fotoKTP.secure_url,
      fotoSelfieUrl: fotoSelfie.secure_url
    });

    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
