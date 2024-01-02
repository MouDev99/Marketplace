import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

function ShoppingCart() {

  return (
    <div className="flex gap-4 justify-center w-full py-2 my-2">
      <CartItems />
      <CartSummary />
    </div>
  )
};

export default ShoppingCart;
