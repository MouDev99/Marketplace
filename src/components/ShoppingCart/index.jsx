import { useState } from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/cart-context";

function ShoppingCart() {
  const { cart, setCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="flex gap-3 justify-center w-full py-2 my-2">
      <CartItems
        props={{
          cart, setCart,
          selectedItems,
          setSelectedItems
        }}
      />
      <CartSummary selectedItems={selectedItems}/>
    </div>
  )
};

export default ShoppingCart;
