import axios from "axios";

export default async function GetSelectedItemData(selectedItem: string) {
  const { data } = await axios.post(
    "http://localhost:8000/getSelectedItemDetails",
    { selectedItem: selectedItem }
  );
  return data;
}
