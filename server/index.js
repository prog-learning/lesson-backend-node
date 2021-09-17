const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

const fs = require('fs');
const dataObject = JSON.parse(fs.readFileSync('./server/data.json', 'utf8'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET http://localhost:8000/api/getData
app.get('/api/getData/', function (req, res) {
  res.status(200).json(dataObject);
});

// GET http://localhost:8000/api/v1/
app.get('/api/v1/', function (req, res) {
  res.json({
    message: 'Hello,world',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
