import { Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";
import ViewOptionsBar from './ViewOptionsBar';
import FullItemView from "./FullItemView";

function OfferedGoodsView() {
  return (
    <div className="flex-1">
      <ViewOptionsBar />
      <Routes>
        <Route path="/" element={<h1>No category selected</h1>} />
        <Route path="/category/:catgegoryName" element={<ProductsList />} />
        <Route path="/category/:catgegoryName/:itemId" element={<FullItemView />} />
      </Routes>
    </div>
  )
};

export default OfferedGoodsView;
