import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "./ProductsList";
import ViewOptionsBar from './ViewOptionsBar';
import data from "../../mock-data/data";
import { useFilterContext } from "../../context/filter-context";

function OfferedGoodsView() {
  const { categoryName } = useParams();
  const {
    searchQuery,
    shippingOption,
    priceRange
  } = useFilterContext();

  const items = filterItems(
    categoryName, searchQuery,
    shippingOption, priceRange
  );

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

function filterItems(category, searchQuery, shipping, priceRange) {
  const itemsByCategory = data[category || "All Categories"];
  return itemsByCategory.filter(item => {
    return ( item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) )
      && (shipping !== "all" ? item.shipping === shipping : true )
      && item.price >= priceRange.min && item.price <= priceRange.max;
  })
};
