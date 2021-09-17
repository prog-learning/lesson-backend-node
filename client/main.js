const getData = async () => {
  const result = await fetch('http://localhost:8000/api/getData');
  const data = await result.json();
  console.log(data);
};
