import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { IconDown, IconUp } from "../../SharedComponents/IconUp-IconDown";

function Price() {
    const [showSlider, setShowSlider] = useState(true);

    const toggleSlider = () => setShowSlider(!showSlider);

    const sliderUI = (
        <Slider
          label="Price Range"
          step={50}
          size="sm"
          minValue={0}
          maxValue={1000}
          defaultValue={[50, 500]}
          formatOptions={{style: "currency", currency: "USD"}}
          className="max-w-md"
       />
    );

    return (
        <div className="pb-1.5 ml-5 border-b-1 border-gray-300">
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
