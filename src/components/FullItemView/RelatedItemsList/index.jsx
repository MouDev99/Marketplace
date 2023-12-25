import ItemCard from "../../SharedComponents/ItemCard";
import data from "../../../mock-data/data";

function RelatedItemsList({ item }) {
  const relatedItems = getRelatedItems(item);

  return (
    <div>
      <h2 className="font-bold text-2xl my-3">Related items:</h2>
      <div className="grid max-[1300px]:grid-cols-4 max-[1600px]:grid-cols-5 min-[1600px]:grid-cols-6 gap-2">
        {
          relatedItems.map((item) => {
            return (
              <ItemCard
                key={item.id}
                props={{item}}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default RelatedItemsList;

function getRelatedItems(item) {
  const relatedItems = [];
  const relatedItemsIds = new Set();

  for (let key in data) {
    const items = data[key];
    items.forEach(itm => {
      // c for condition
      const c1 = itm.category === item.category && itm.id !== item.id;
      const c2 = itm.price >= item.price -50 && itm.price <= item.price + 50;
      const c3 = relatedItems.length < 10;
      const c4 = relatedItemsIds.has(itm.id) === false;
      if (c1 && c2 && c3 && c4) {
            relatedItems.push(itm);
            relatedItemsIds.add(itm.id);
      };
    });
    if (relatedItems.length === 12) break;
  }
  return relatedItems
}
