import { useState } from "react";
import ItemCard from "../../SharedComponents/ItemCard";
import Pagination from "./Pagination";

function ProductsList({ props }) {
  const { items, view, sortOption } = props;
  const [pageNumber, setPageNumber] = useState(1);

  // select the items to show based on pageNumber / (show 15 items per page)
  const currItems = items.slice((pageNumber -1)*15, pageNumber*15);

  // sort current items based on sort option
  currItems.sort(compareFunc(sortOption));

  const layout = view === "grid" ?
    "grid max-[1300px]:grid-cols-3 max-[1600px]:grid-cols-4 min-[1600px]:grid-cols-5 gap-2" :
    "flex flex-col gap-2";

  return (
    <div className={`${layout} min-w-[765px] border-1 border-neutral-400 rounded-xl p-4 pb-20 h-fit`}>
      {
        currItems.map((item) => {
          return (
            <ItemCard
              key={item.id}
              props={{item, view}}
            />
          )
        })
      }
      <Pagination
        setPageNumber={setPageNumber}
        itemsNum={items.length}
      />
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
      const item1Date = new Date(item1.listedAt);
      const item2Date = new Date(item2.listedAt);
      if (item1Date > item2Date) return -1
      if (item1Date < item2Date) return 1;

    }
    return 0;
  };
};
