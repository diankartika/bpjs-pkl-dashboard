const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const participantRoutes = require('./routes/participantRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

app.use('/api/participants', participantRoutes);

const PORT = process.env.PORT || 5050;
app.get('/ping', (req, res) => res.send('pong'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));