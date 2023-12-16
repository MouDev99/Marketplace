import { useState } from "react";
import { Link } from "@nextui-org/react";
import { IconDown, IconUp } from "./IconUp-IconDown";

function Categories() {
    const [showCategoriesList, setShowCategoriesList] = useState(true);

    const toggleCategoriesList = () => setShowCategoriesList(!showCategoriesList);

    const categoriesArr = [
      { name: 'All Categories', icon: (<IconShop />)},
      { name: 'Accessories', icon: (<IconRing />)},
      { name: 'Clothing', icon: (<IconShirt />)},
      { name: 'Electronics', icon: (<IconMonitorCellphone />)},
      { name: 'Furniture', icon: (<IconSofaSingle />)},
      { name: 'Home Appliances', icon: (<IconHomeCog />)},
      { name: 'Office supplies', icon: (<IconPrinterFill />)},
      { name: 'Pet supplies', icon: (<IconDog />)},
      { name: 'Shoes', icon: (<IconShoeFormal />)},
      { name: 'Sports & Entertainment', icon: (<IconAmericanFootball />)},
      { name: 'Toys & Games', icon: (<IconGameController />)},
    ];

    const handlePress = (e) => {
      const prvActiveLink = document.querySelector(".category-link.active");
      if (prvActiveLink) {
        prvActiveLink.classList.remove("active");
      }
      e.target.classList.add("active")
    }

    const listUI = (
      <div className="flex flex-col gap-2 w-full py-2">
        {
          categoriesArr.map((category, i) => {
            const { name, icon } = category;
            return (
              <Link
                key={i}
                href={`/category/${name.toLowerCase()}`}
                size="md"
                color="foreground"
                className="pl-3 py-2 category-link relative font-semibold"
                isBlock
                onPress={handlePress}
              >
                {name} {(icon)}
              </Link>
            )
          })
        }
      </div>
    )

    return (
      <div className="pb-1.5 ml-5 border-b-1 border-gray-300">
        <span className="flex cursor-pointer relative font-bold"
          onClick={toggleCategoriesList}
        >
          <span>Categories</span> {showCategoriesList ? <IconUp /> : <IconDown />}
        </span>
        { showCategoriesList && listUI }
      </div>
    )
};

export default Categories;

function IconShop(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0014.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0015.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0038.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 01512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 01-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z" />
    </svg>
  );
}

function IconRing(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.343 3.686A8.015 8.015 0 017.936 2.45a8.014 8.014 0 018.128 0 8.016 8.016 0 011.593 1.236L12 9.343 6.343 3.686zM12 6.514L9.413 3.927a6.017 6.017 0 015.174 0L12 6.514z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 12.658a9.98 9.98 0 013.692-7.76l1.423 1.424a8 8 0 109.77 0l1.423-1.424A9.98 9.98 0 0122 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10z"
      />
    </svg>
  );
}

function IconShirt(props) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3l126.2 105.1c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
    </svg>
  );
}

function IconMonitorCellphone(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M23 11h-5a1 1 0 00-1 1v9a1 1 0 001 1h5a1 1 0 001-1v-9a1 1 0 00-1-1m0 9h-5v-7h5v7M20 2H2C.89 2 0 2.89 0 4v12a2 2 0 002 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 00-2-2z" />
    </svg>
  );
}

function IconSofaSingle(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M5 9.15V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2.16c-1.16.41-2 1.51-2 2.81V14H7v-2.04c0-1.29-.84-2.4-2-2.81M20 10c-1.1 0-2 .9-2 2v3H6v-3a2 2 0 10-4 0v5c0 1.1.9 2 2 2v2h2v-2h12v2h2v-2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function IconHomeCog(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 21v-6a2 2 0 012-2h1.6" />
      <path d="M20.001 11.001L12 3l-9 9h2v7a2 2 0 002 2h4.159" />
      <path d="M20.001 18 A2 2 0 0 1 18.001 20 A2 2 0 0 1 16.001 18 A2 2 0 0 1 20.001 18 z" />
      <path d="M18.001 14.5V16M18.001 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75" />
    </svg>
  );
}

function IconPrinterFill(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M5 1a2 2 0 00-2 2v1h10V3a2 2 0 00-2-2H5zm6 8H5a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1z" />
      <path d="M0 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2h-1v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2H2a2 2 0 01-2-2V7zm2.5 1a.5.5 0 100-1 .5.5 0 000 1z" />
    </svg>
  );
}

function IconDog(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M18 4c-1.71 0-2.75.33-3.35.61C13.88 4.23 13 4 12 4s-1.88.23-2.65.61C8.75 4.33 7.71 4 6 4c-3 0-5 8-5 10 0 .83 1.32 1.59 3.14 1.9.64 2.24 3.66 3.95 7.36 4.1v-4.28c-.59-.37-1.5-1.04-1.5-1.72 0-1 2-1 2-1s2 0 2 1c0 .68-.91 1.35-1.5 1.72V20c3.7-.15 6.72-1.86 7.36-4.1C21.68 15.59 23 14.83 23 14c0-2-2-10-5-10M4.15 13.87c-.5-.12-.89-.26-1.15-.37.25-2.77 2.2-7.1 3.05-7.5.54 0 .95.06 1.32.11-2.1 2.31-2.93 5.93-3.22 7.76M9 12a1 1 0 01-1-1c0-.54.45-1 1-1a1 1 0 011 1c0 .56-.45 1-1 1m6 0a1 1 0 01-1-1c0-.54.45-1 1-1a1 1 0 011 1c0 .56-.45 1-1 1m4.85 1.87c-.29-1.83-1.12-5.45-3.22-7.76.37-.05.78-.11 1.32-.11.85.4 2.8 4.73 3.05 7.5-.25.11-.64.25-1.15.37z" />
    </svg>
  );
}

function IconShoeFormal(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M21.5 9V8h-1l-1 1H15l-1-1h-1l-6 4H4a2 2 0 00-2 2v2h8l3-1h2v1h6.5v-2s.5-1 .5-2.5-.5-2.5-.5-2.5z" />
    </svg>
  );
}

function IconAmericanFootball(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M122.06 122.06c-44.37 44.37-66.71 100.61-78 145.28l200.6 200.56c44.67-11.25 100.91-33.59 145.28-78s66.71-100.61 78-145.28L267.34 44.1c-44.67 11.25-100.91 33.59-145.28 77.96zm256.73 256.72zM300.65 189L323 166.71A15.78 15.78 0 01345.29 189L323 211.35l11.16 11.17a15.78 15.78 0 01-22.32 22.32l-11.16-11.16L278.32 256l11.16 11.16a15.78 15.78 0 11-22.32 22.32L256 278.32l-22.32 22.33 11.16 11.16a15.78 15.78 0 11-22.32 22.32L211.35 323 189 345.29A15.78 15.78 0 01166.71 323L189 300.65l-11.16-11.17a15.78 15.78 0 0122.32-22.32l11.16 11.16L233.68 256l-11.16-11.16a15.78 15.78 0 1122.32-22.32L256 233.68l22.32-22.33-11.16-11.16a15.78 15.78 0 0122.32-22.32zM476.57 199.63c7.31-54.53 4-120.26-20-144.21s-89.68-27.3-144.21-20c-2.51.34-5.16.72-7.91 1.15l171 171c.4-2.78.78-5.43 1.12-7.94zM35.43 312.37c-7.31 54.53-4 120.26 20 144.21C72.17 473.33 109.34 480 148.84 480a387 387 0 0050.79-3.43c2.51-.34 5.16-.72 7.91-1.15l-171-171c-.39 2.79-.77 5.44-1.11 7.95z" />
    </svg>
  );
}

function IconGameController(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="24px"
      width="24px"
      {...props}
      className="absolute right-2"
    >
      <path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z" />
    </svg>
  );
}
