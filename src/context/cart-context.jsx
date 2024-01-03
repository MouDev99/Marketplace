import { createContext, useContext, useState } from "react";
import { allCategories } from "../mock-data/data";

function getCartItems() {
  const cartItemIds = JSON.parse(localStorage.getItem("cartItemIds")) || [];
  if (!cartItemIds.length) {
    localStorage.setItem("cartItemIds", JSON.stringify(cartItemIds));
    return {};
  }

  const cartItems = {};
  for (let item of allCategories) {
    if (cartItemIds.includes(item.id)) {
      cartItems[item.id] = item;
    }
  };
  return cartItems;
}

const CartContext = createContext();

function CartContextProvider(props) {
  const cartItems = getCartItems();
  const [cart, setCart] = useState(cartItems);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;

export function useCart() {
  return useContext(CartContext);
};
