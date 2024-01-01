import DeliveryOptions from "./DeliveryOptions";
import Price from "./Price";
import Categories from "../../SharedComponents/Categories"

function Filters() {

  return (
      <div className="flex flex-col pl-2 gap-2 ">
          <span className="text-xl font-extrabold">Filters:</span>
          <DeliveryOptions />
          <Price />
          <Categories />
      </div>
  )
};

export default Filters;
