import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

function ProductsList() {
  var numbers = Array.from({ length: 20 }, (_, i) => i +1)
  const { catgegoryName } = useParams();

  return (
    <div className="grid max-[1300px]:grid-cols-3 max-[1600px]:grid-cols-4 min-[1600px]:grid-cols-5
      gap-2 min-w-[765px] border-1 border-neutral-400 rounded-xl mx-4 p-4 h-fit"
    >
      {
        numbers.map((num) => <ItemCard key={num} href={`/category/${catgegoryName}/${num}`}/>)
      }
    </div>
  )
}

export default ProductsList;
