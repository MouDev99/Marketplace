import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const navigate = useNavigate();

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
    </header>
  )
};

export default Header;

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
