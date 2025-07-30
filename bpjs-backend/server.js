const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const participantRoutes = require('./routes/participantRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());

// Hanya pakai express.json jika bukan multipart/form-data
app.use((req, res, next) => {
  const contentType = req.headers['content-type'] || '';
  if (contentType.startsWith('multipart/form-data')) {
    next(); // biarkan multer yang handle
  } else {
    express.json()(req, res, next); // proses json biasa
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

// Routes
app.use('/api/participants', participantRoutes);
app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => {
  res.json({ message: 'Backend aktif di Railway!' });
});


// Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const uploadRoutes = require('./routes/upload'); // jika ada
app.use('/api/upload', uploadRoutes);
