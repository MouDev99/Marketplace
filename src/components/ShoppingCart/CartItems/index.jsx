import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  Image
} from "@nextui-org/react";

function CartItems() {
  const items = Array.from({length: 4});

  return (
    <div className="w-fit flex flex-col gap-3">
      <div className="flex flex-col gap-4 p-3 shadow-lg rounded-sm border-1">
        <h2 className="text-2xl font-bold">Shopping Cart (4)</h2>
        <Checkbox
          color="secondary"
          className="text-sm text-foreground ml-2"
        >
          Select all items
        </Checkbox>
      </div>
      <div className="flex flex-col gap-2 rounded-sm border-1">
        {
          items.map((item, i) => {
            return <CartItem key={i}/>
          })
        }
      </div>
    </div>
  )
};

export default CartItems;

function CartItem() {
  return (
    <Card radius="md" shadow="sm">
      <CardHeader>
        <Checkbox
          color="secondary"
          className="text-sm text-foreground ml-2"
        >
          Item title
        </Checkbox>
      </CardHeader>

      <CardBody className="overflow-visible ml-4">
        <div className="flex items-center max-lg:flex-col max-lg:items-start max-lg:gap-2">
          <Checkbox color="secondary" className="text-sm text-foreground max-lg:hidden"></Checkbox>
          <Image
            alt="Card background"
            className="object-cover rounded-md min-w-[170px]"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={170}
          />

          <div className="mx-2 max-lg:ml-0">
            <div className="flex">
              <p className="max-w-xl text-md">
                This is the product description
                This is the product description
                This is the product description
                This is the product description
                This is the product description
                This is the product description
              </p>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="sm"
                variant="bordered"
                title="remove from cart"
              >
                <IconDelete />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold">Price: US $5.34</span>
              <span className="text-xs font-semibold">Shipping: free shipping</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function IconDelete(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
      className="text-danger"
    >
      <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z" />
    </svg>
  );
}
