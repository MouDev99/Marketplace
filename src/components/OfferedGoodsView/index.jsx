import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "./ProductsList";
import ViewOptionsBar from './ViewOptionsBar';
import data from "../../mock-data/data";

function OfferedGoodsView() {
  const { categoryName } = useParams();
  const items = data[categoryName || "All Categories"];

  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="flex-1 relative">
      <ViewOptionsBar props={{view, setView, setSortOption}} />
      <ProductsList props={{items, view, sortOption}} />
    </div>
  )
};

export default OfferedGoodsView;
