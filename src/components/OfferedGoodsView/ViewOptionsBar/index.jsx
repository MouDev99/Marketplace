import { Button, ButtonGroup, Select, SelectItem } from "@nextui-org/react";

function ViewOptionsBar({ props }) {
  const { view, setView, setSortOption } = props;

  return (
    <div className="border-1 border-neutral-400 rounded-xl my-3 mx-4 p-8">
      <div className="flex justify-end items-center gap-3">
          <div className="flex items-center gap-1">
              <span>Sort by:</span>
              <Select
                labelPlacement="outside"
                aria-label="Sort by:"
                className="max-w-xs w-44"
                placeholder="Sort..."
                variant="faded"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <SelectItem key="price-low-to-high" value="price-low-to-high">
                  Price: low to high
                </SelectItem>
                <SelectItem key="price-high-to-low" value="price-high-to-low">
                  Price: high to low
                </SelectItem>
                <SelectItem key="newest" value="newest">
                  Newest
                </SelectItem>
              </Select>
          </div>
          <div className="flex items-center gap-1">
              <span>View:</span>
              <ButtonGroup>
                  <Button variant="solid"
                    color={view === "grid" ? "secondary" : "default"}
                    className="font-semibold"
                    onPress={() => setView('grid')}
                  >
                    <IconGrid />
                    <span>Grid</span>
                  </Button>
                  <Button variant="solid"
                    color={view === "list" ? "secondary" : "default"}
                    className="font-semibold"
                    onPress={() => setView('list')}
                  >
                    <IconList />
                    <span>List</span>
                  </Button>
              </ButtonGroup>
          </div>
      </div>
    </div>
  )
};

export default ViewOptionsBar;

function IconGrid(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1.2em"
        width="1.2em"
        {...props}
      >
        <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" />
      </svg>
    );
}

function IconList(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1.7em"
        width="1.7em"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
        />
      </svg>
    );
}
