import React, {forwardRef} from "react";
import {Input} from "@nextui-org/react";

const SearchIcon = (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
);

function SearchInput() {

  return (
    <Input
      type="text"
      label=""
      placeholder="Search marketplace"
      labelPlacement="outside"
      startContent={ <SearchIcon className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />}
    />
  )
}
export default SearchInput;
