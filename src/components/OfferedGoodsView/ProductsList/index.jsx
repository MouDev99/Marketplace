import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

function ProductsList({ props }) {
  const { view, sortOption } = props;
  const { catgegoryName } = useParams();

  const items = Array.from({ length: 20 }, (_, i) => {
    return {
      id: i,
      price: Math.floor(Math.random() * 100) + 1,
      createdAt: Math.floor(Math.random() * 100) + 1 // for testing purposes
    }
  });
  items.sort(compareFunc(sortOption));

  const layout = view === "grid" ?
    "grid max-[1300px]:grid-cols-3 max-[1600px]:grid-cols-4 min-[1600px]:grid-cols-5 gap-2" :
    "flex flex-col gap-2";

  return (
    <div className={`${layout} min-w-[765px] border-1 border-neutral-400 rounded-xl mx-4 p-4 h-fit`}
    >
      {
        items.map((item) => {
          const {id, price, createdAt} = item;
          const imgHref=`/category/${catgegoryName}/${id}`;
          return (
            <ItemCard
              key={id}
              props={{imgHref, view, price, createdAt}}
            />
          )
        })
      }
    </div>
  )
}

export default ProductsList;


function compareFunc(sortOption) {
  return (item1, item2) => {
    if (sortOption === "price-low-to-high") {
      if (item1.price > item2.price) return 1
      if (item1.price < item2.price) return -1;

    } else if (sortOption === "price-high-to-low") {
      if (item1.price > item2.price) return -1;
      if (item1.price < item2.price) return 1;

    } else if (sortOption === "newest") {
      if (item1.createdAt > item2.createdAt) return -1
      if (item1.createdAt < item2.createdAt) return 1;

    }
    return 0;
  };
};
