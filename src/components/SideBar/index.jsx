import SearchInput from './SearchInput.jsx';
import CreateNewListing from './CreateNewListing';
import Filters from './Filters';

function SideBar() {

    return (
        <div
          className="
            w-[360px] h-[600px]
            p-[10px] mt-3
            flex flex-col gap-4
            overflow-y-auto
            border-r-1
            border-gray-300
            "
        >
            <SearchInput />
            <CreateNewListing />
            <Filters />
        </div>
    )
};

export default SideBar;
