import { useState } from "react";
import { Radio, RadioGroup} from '@nextui-org/react'
import { IconDown, IconUp } from "../../SharedComponents/IconUp-IconDown";
import { useFilterContext } from "../../../context/filter-context";

function DeliveryOptions() {
    const { shippingOption, setShippingOption } = useFilterContext();
    const [showOptions, setShowOptions] = useState(true);

    const toggleOptions = () => setShowOptions(!showOptions);

    const OptionsUI = (
        <div className="flex flex-col ml-4">
            <RadioGroup
              className="mt-1"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
            >
              <Radio value="all">All Shipping</Radio>
              <Radio value="choice">Choice</Radio>
              <Radio value="plus">Plus</Radio>
              <Radio value="free">Free shipping</Radio>
            </RadioGroup>
        </div>
    )

    return (
        <div className="pb-1.5 border-b-1 border-gray-300">
            <span className="flex cursor-pointer relative font-bold"
              onClick={toggleOptions}
            >
              <span>Delivery options & services</span> {showOptions ? <IconUp /> : <IconDown />}
            </span>
            { showOptions && OptionsUI }
        </div>
    )
};

export default DeliveryOptions;
