import { Pagination as NextUiPagination } from '@nextui-org/react';

function Pagination() {
  const totalNumsOfItems = 100;
  const numOfPages = Math.ceil(totalNumsOfItems/20) // display 20 items per page.
  return (
    <div className="flex justify-center absolute bottom-3 py-2 px-12 w-[94.5%] rounded-xl">
      <NextUiPagination showControls total={numOfPages} initialPage={1} color="secondary" variant="faded"
        onChange={num => console.log("page num ===>", num)}
      />
    </div>
  )
};

export default Pagination;
