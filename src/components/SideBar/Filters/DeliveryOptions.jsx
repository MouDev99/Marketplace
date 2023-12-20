import { useState } from "react";
import { Radio, RadioGroup} from '@nextui-org/react'
import { IconDown, IconUp } from "../../SharedComponents/IconUp-IconDown";

function DeliveryOptions() {
    const [showOptions, setShowOptions] = useState(true);

    const toggleOptions = () => setShowOptions(!showOptions);

    const OptionsUI = (
        <div className="flex flex-col ml-4">
            <RadioGroup className="mt-1">
                <Radio value="choice">Choice</Radio>
                <Radio value="plus">Plus</Radio>
                <Radio value="free shipping">Free shipping</Radio>
            </RadioGroup>
        </div>
    )

    return (
        <div className="pb-1.5 ml-5 border-b-1 border-gray-300">
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
