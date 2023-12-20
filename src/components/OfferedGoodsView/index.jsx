import { useState } from "react";
import ProductsList from "./ProductsList";
import ViewOptionsBar from './ViewOptionsBar';

function OfferedGoodsView() {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="flex-1 relative">
      <ViewOptionsBar props={{view, setView, setSortOption}} />
      <ProductsList props={{view, sortOption}} />
    </div>
  )
};

export default OfferedGoodsView;
