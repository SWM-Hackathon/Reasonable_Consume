// Import Modules
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

// Router Part
require('dotenv').config();
const port = process.env.PORT;
const apiRouter = require('./routes/index');
app.use('/api', apiRouter);

// React based Web provide
app.use(express.static(path.join(__dirname, '../client', 'build')));
app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

// Cors Setting
app.use(cors());

// start express server on port
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;
