require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/index');

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../client', 'build')));
app.use(express.static('public'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
});

// start express server on port 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;
