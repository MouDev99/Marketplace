import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "../../context/cart-context";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const numOfItemsInCart = Object.keys(cart).length;

  return (
    <header className="flex justify-center bg-white dark:bg-gray-800 min-w-[500px] border-b-small border-[#71717A]">
      <div className="flex items-center justify-start gap-4 px-6 py-4 md:w-3/4 lg:2/4">
        <div className="flex items-center space-x-4">
          <Button className="" variant="bordered" onPress={() => navigate("/")}>
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </Button>
        </div>
        <div className="flex justify-between gap-4 flex-grow h-[40px]">
          <h1 className="flex items-center font-semibold text-xl">
            Find, Sell, and Explore: Your Marketplace Hub
          </h1>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex items-center">
        <Button variant="bordered" onPress={() => navigate("/shoppingcart")}>
          <IconShoppingCart />
          <span className="text-xl font-semibold -ml-1">({numOfItemsInCart})</span>
        </Button>
      </div>
    </header>
  )
};

export default Header;

function IconShoppingCart(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="7em"
      width="7em"
      {...props}
    >
      <path d="M10 21 A1 1 0 0 1 9 22 A1 1 0 0 1 8 21 A1 1 0 0 1 10 21 z" />
      <path d="M21 21 A1 1 0 0 1 20 22 A1 1 0 0 1 19 21 A1 1 0 0 1 21 21 z" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
