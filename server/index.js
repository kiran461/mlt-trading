// server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/inquiry', inquiryRoutes);

app.get('/', (req, res) => {
  res.send('MLT Trading API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
