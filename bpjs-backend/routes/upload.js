const express = require('express');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const streamifier = require('streamifier');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: 'Tidak ada file yang diupload' });
    }

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

    const result = await uploadFromBuffer(req.file.buffer);
    res.status(200).json({ url: result.secure_url });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;
