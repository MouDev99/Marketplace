import ItemCard from "../../SharedComponents/ItemCard";

function RelatedItemsList() {
  const items = Array.from({ length: 12 }, (_, i) => {
    return {
      id: i,
      price: Math.floor(Math.random() * 100) + 1,
      createdAt: Math.floor(Math.random() * 100) + 1 // for testing purposes
    }
  });

  return (
    <div>
      <h2 className="font-bold text-2xl my-3">Related items:</h2>
      <div className="grid max-[1300px]:grid-cols-4 max-[1600px]:grid-cols-5 min-[1600px]:grid-cols-6 gap-2">
        {
          items.map((item) => {
            const {id, price, createdAt} = item;
            const imgHref=`/items/${id}`;
            return (
              <ItemCard
                key={id}
                props={{imgHref, view: "grid", price, createdAt}}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default RelatedItemsList;
