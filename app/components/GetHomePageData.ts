async function GetHomePageData() {
  const response = await fetch("http://localhost:8000/getItems");
  const data = await response.json();
  return data;
}

export default GetHomePageData;
