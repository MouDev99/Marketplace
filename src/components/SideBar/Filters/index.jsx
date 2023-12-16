import DeliveryOptions from "./DeliveryOptions";
import Price from "./Price";
import Categories from "./Categories";

function Filters() {

  return (
      <div className="flex flex-col gap-4">
          <span className="text-xl  font-extrabold ml-3">Filters:</span>
          <DeliveryOptions />
          <Price />
          <Categories />
      </div>
  )
};

export default Filters;
