import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { IconDown, IconUp } from "../../SharedComponents/IconUp-IconDown";
import { useFilterContext } from "../../../context/filter-context";

function Price() {
  const { priceRange, setPriceRange } = useFilterContext();
  const [showSlider, setShowSlider] = useState(true);

  const toggleSlider = () => setShowSlider(!showSlider);

  const sliderUI = (
    <Slider
      label="Price Range"
      step={25}
      size="sm"
      minValue={0}
      maxValue={500}
      defaultValue={[priceRange.min, priceRange.max]}
      formatOptions={{style: "currency", currency: "USD"}}
      className="max-w-md"
      showSteps
      onChangeEnd={([min, max]) => setPriceRange({ min, max })}
    />
  );

  return (
    <div className="pb-1.5 border-b-1 border-gray-300">
      <span className="flex cursor-pointer relative font-bold"
        onClick={toggleSlider}
      >
        <span>Price</span> {showSlider ? <IconUp /> : <IconDown />}
      </span>
      { showSlider && sliderUI }
    </div>
  )
};

export default Price;
