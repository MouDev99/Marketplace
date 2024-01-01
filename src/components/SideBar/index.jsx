import { useState } from 'react';
import SearchInput from './SearchInput.jsx';
import CreateNewListing from './CreateNewListing';
import Filters from './Filters';

function SideBar() {
  const [showContent, setShowContent] = useState(true);

  const navClasses = showContent ?
    `w-[390px] px-2 p-1 mt-3 mx-3 shadow-xl border-1 rounded-lg h-[700px] duration-300 ease-linear
    overflow-y-auto border-gray-300 rounded-md bg-white border-t-1 dark:bg-black
    max-[1210px]:absolute max-[1210px]:top-15 max-[1210px]:left-4 max-[1210px]:z-30` :
    "p-1 mt-3 h-fit";

  return (
    <nav className={navClasses}>
      <div className='flex'>
        <button
          onClick={() => setShowContent(false)}
          className={`
            ${showContent ? "": "hidden"}
            ml-auto hover:bg-foreground-200 rounded-full p-1
            ease-linear duration-300
          `}
        >
          <IconClose />
        </button>
        <button onClick={() => setShowContent(true)} className={`${showContent ? "hidden": ""}`}>
          <IconBars />
        </button>
      </div>
      <div className={`${showContent ? "content w-full p-0 flex flex-col gap-3 items-start" : "hidden"}`}>
         <h2 className="text-2xl font-semibold text-center">Find Your Perfect Item</h2>
         <SearchInput />
         <CreateNewListing />
         <Filters />
      </div>
    </nav>
  )
}

export default SideBar;


function IconBars(props) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1.8em"
      width="1.8em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}
