import axios from "axios";

export default async function GetSelectedItemData(selectedItem: string) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/getSelectedItemDetails`,
    { selectedItem: selectedItem }
  );
  return data;
}
