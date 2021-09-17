/* JSONファイルを操作する処理をここまとめて書く */

/* Node.jsのファイル操作をしてくれる機能 */
const fs = require('fs');
/* ランダムなIDを自動生成してくれるnanoidを使用 */
const { nanoid } = require('nanoid');

const getJsonData = () => {
  const data = fs.readFileSync('./server/data.json', 'utf8');
  return JSON.parse(data);
};

const postJsonData = (params) => {
  const data = fs.readFileSync('./server/data.json', 'utf8');
  const jsObject = JSON.parse(data);
  jsObject.push({ id: nanoid(), ...params });
  fs.writeFile('./server/data.json', JSON.stringify(jsObject), () => {});
};

module.exports = { getJsonData, postJsonData };
