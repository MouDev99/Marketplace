import { useParams } from "react-router-dom";
import Categories from "../SharedComponents/Categories";
import ItemImages from "./ItemImages";
import ItemDetails from "./ItemDetails";
import RelatedItemsList from "./RelatedItemsList";
import data from "../../mock-data/data";

function FullItemView() {
  const { itemId } = useParams();
  const item = getItemById(itemId);

  return (
     <div className="flex flex-col items-center gap-3 mb-10">
       <div className="flex justify-center gap-4 rounded-xl m-3 w-[80%]">
         <Categories />
         <ItemImages imgsUrl={item.imgsUrl} />
         <ItemDetails item={item} />
       </div>
       <div className="flex justify-center w-[80%]">
        <RelatedItemsList item={item} />
       </div>
     </div>
  )
};

export default FullItemView;

function getItemById(id) {
  let item = null;
  for (let category in data) {
    const items = data[category];
    if (!item) {
      item = items.find(itm => itm.id === id);
    }
  };
  return item;
};
