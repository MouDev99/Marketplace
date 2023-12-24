import { Pagination as NextUiPagination } from '@nextui-org/react';

function Pagination({ setPageNumber, itemsNum }) {
  const numOfPages = Math.ceil(itemsNum/15) // display 15 items per page.
  return (
    <div className="flex justify-center absolute bottom-3 py-2 px-12 w-[94.5%] rounded-xl">
      <NextUiPagination showControls total={numOfPages} initialPage={1} color="secondary" variant="faded"
        onChange={num => setPageNumber(num)}
      />
    </div>
  )
};

export default Pagination;
