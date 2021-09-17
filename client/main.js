/* fetchメソッドを使ってサーバーにリクエストを送信 */
const getData = async () => {
  const result = await fetch('http://localhost:8000/api/getData', {
    method: 'GET',
  });
  const data = await result.json();
  console.log(data);

  document.getElementById('data').innerText = JSON.stringify(data, null, 2);
};

const postData = async () => {
  await fetch('http://localhost:8000/api/postData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'post-name',
      text: 'post-text',
    }),
  });
};
