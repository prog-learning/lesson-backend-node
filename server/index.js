/* 簡単にサーバーの構築ができるExpressを使用 */
const express = require('express');
const app = express();

/* CORSという制限に引っかからないようにしておく設定 */
const cors = require('cors');
app.use(cors());

/* リクエストのbodyを受け取るための設定 */
const bodyParser = require('body-parser');
app.use(bodyParser());

const { getJsonData, postJsonData } = require('./functions');

// const fs = require('fs');
// const dataObject = JSON.parse(fs.readFileSync('./server/data.json', 'utf8'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET http://localhost:8000/api/getData
app.get('/api/getData/', function (req, res) {
  const data = getJsonData();
  res.status(200).json(data);
});

// GET http://localhost:8000/api/postData/
app.post('/api/postData/', function (req, res) {
  const params = req.body;
  postJsonData(params);
  res.status(200).end();
});

/* PORT:8000を使用してサーバーをListen（起動） */
app.listen(8000, () => {
  console.log(`Example app listening at http://localhost:8000`);
});
