const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const participantRoutes = require('./routes/participantRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

// Routes
app.use('/api/participants', participantRoutes);
app.get('/ping', (req, res) => res.send('pong'));

// Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const uploadRoutes = require('./routes/upload'); // jika ada
app.use('/api/upload', uploadRoutes);
