import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterContextProvider(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [shippingOption, setShippingOption] = useState("all");
  const [priceRange, setPriceRange] = useState({min: 0, max: 500});
  return (
    <FilterContext.Provider
      value={{
        searchQuery, setSearchQuery,
        shippingOption, setShippingOption,
        priceRange, setPriceRange
      }}
    >
      {props.children}
    </FilterContext.Provider>
  )
};

export function useFilterContext() {
  return useContext(FilterContext);
};
