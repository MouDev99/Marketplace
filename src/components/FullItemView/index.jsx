import { useNavigate, useParams } from "react-router-dom";
import Categories from "../SharedComponents/Categories";
import ItemImages from "./ItemImages";
import ItemDetails from "./ItemDetails";
import RelatedItemsList from "./RelatedItemsList";

function FullItemView() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  return (
     <div className="flex flex-col items-center gap-3">
       <div className="flex justify-center gap-4 rounded-xl m-3 w-[80%]">
         <Categories />
         <ItemImages />
         <ItemDetails />
       </div>
       <div className="flex justify-center w-[80%]">
        <RelatedItemsList />
       </div>
     </div>
  )
};

export default FullItemView;
