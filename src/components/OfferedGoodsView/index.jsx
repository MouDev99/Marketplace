import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import ViewOptionsBar from './ViewOptionsBar';
import FullItemView from "./FullItemView";

function OfferedGoodsView() {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="flex-1 relative">
      <ViewOptionsBar props={{view, setView, setSortOption}} />
      <Routes>
        <Route path="/" element={<h1>No category selected</h1>} />
        <Route path="/category/:catgegoryName" element={<ProductsList props={{view, sortOption}} />} />
        <Route path="/category/:catgegoryName/:itemId" element={<FullItemView />} />
      </Routes>
    </div>
  )
};

export default OfferedGoodsView;
