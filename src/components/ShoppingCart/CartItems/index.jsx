import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import CartItem from "./CartItem";

function CartItems({ props }) {
  const {
    cart, setCart,
    selectedItems,
    setSelectedItems
  } = props;
  const items = Object.values(cart);
  const numOfCartItems = items.length;
  const [allItemsSelected, setAllitemsSelected] = useState(false);

  if (!items.length) {
    return (
      <div className="max-w-2xl flex flex-grow">
        <h2 className="text-2xl font-bold">
         You have 0 items in your cart. Start adding items to see them here.
        </h2>
      </div>
    )
  }

  return (
    <div className="max-w-2xl flex flex-grow flex-col gap-3">
      <div className="flex flex-col gap-4 p-3 shadow-lg rounded-sm border-1">
        <h2 className="text-2xl font-bold">Shopping Cart ({numOfCartItems})</h2>
        <Checkbox
          color="secondary"
          className="text-sm text-foreground ml-2"
          isSelected={allItemsSelected}
          onChange={(e) => {
            const isSelected = e.target.checked;
            if (isSelected) {
              setSelectedItems([
                ...items.map(itm => {
                  return { id: itm.id, price: itm.price}
                })
              ]);
            }
            else setSelectedItems([]);
            setAllitemsSelected(e.target.checked)
          }}
        >
          Select all items
        </Checkbox>
      </div>
      <div className="flex flex-col gap-2 rounded-sm border-1">
        {
          items.map((item, i) => {
            return (
              <CartItem
                key={i}
                props={{
                  item, numOfCartItems,
                  selectedItems, setSelectedItems,
                  setAllitemsSelected,
                  cart, setCart
                }}
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default CartItems;
