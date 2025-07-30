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

    const uploadToCloudinary = (fileBuffer, filename) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'bpjs-dashboard', public_id: filename },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(fileBuffer);
      });
    };

    const fotoKTPResult = await uploadToCloudinary(files.fotoKTP[0].buffer, 'ktp_' + Date.now());
    const fotoSelfieResult = await uploadToCloudinary(files.fotoSelfie[0].buffer, 'selfie_' + Date.now());

    const fotoSelfie = await cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) throw error;
        return result.secure_url;
      }
    );

  const newData = new Participant({
    ...body,
    fotoKTPUrl: fotoKTPResult.secure_url,
    fotoSelfieUrl: fotoSelfieResult.secure_url,
  });

    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data peserta' });
  }
});


module.exports = router;
