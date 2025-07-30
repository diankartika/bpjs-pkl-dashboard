const express = require('express');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const Participant = require('../models/Participant');
const router = express.Router();
const streamifier = require('streamifier');

// configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFromBuffer = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'bpjs-dashboard' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

router.post('/', upload.fields([
  { name: 'fotoKTP', maxCount: 1 },
  { name: 'fotoSelfie', maxCount: 1 },
]), async (req, res) => {
  try {
    const { body, files } = req;

    // default placeholder URL (bisa ganti dengan gambar default di Cloudinary kamu)
    let fotoKTPUrl = '';
    let fotoSelfieUrl = '';

    if (files?.fotoKTP?.[0]) {
      fotoKTPUrl = (await uploadFromBuffer(files.fotoKTP[0].buffer)).secure_url;
    }

    if (files?.fotoSelfie?.[0]) {
      fotoSelfieUrl = (await uploadFromBuffer(files.fotoSelfie[0].buffer)).secure_url;
    }

    const newData = new Participant({
      ...body,
      fotoKTPUrl,
      fotoSelfieUrl
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
