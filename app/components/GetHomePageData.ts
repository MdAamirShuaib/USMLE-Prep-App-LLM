import axios from "axios";

async function GetHomePageData() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/getItems`
  );

  return data;
}

export default GetHomePageData;
