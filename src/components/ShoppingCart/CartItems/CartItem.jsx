import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  Image
} from "@nextui-org/react";

function CartItem({ props }) {
  const {
    item, numOfCartItems,
    selectedItems, setSelectedItems,
    setAllitemsSelected,
    cart, setCart
  } = props;
  const {
    id, name, imgsUrl,
    description, price, shipping
  } = item;
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    const selectedItemsIds = selectedItems.map(itm => itm.id);
    setItemSelected(selectedItemsIds.includes(id));
    if (selectedItems.length === numOfCartItems) {
      setAllitemsSelected(true);
    } else setAllitemsSelected(false)
  }, [selectedItems, itemSelected]);

  const handleSelection = (e) => {
    const value = e.target.checked;
    if (value) setSelectedItems([...selectedItems, {id, price}]);
    else setSelectedItems(selectedItems.filter(itm => itm.id !== id))
    setItemSelected(e.target.checked);
  };

  const handleDeleteFromCart = () => {
    let cartItemIds = JSON.parse(localStorage.getItem("cartItemIds")) || [];

    delete cart[id];
    cartItemIds = cartItemIds.filter(cartItemId => cartItemId !== id);

    localStorage.setItem("cartItemIds", JSON.stringify(cartItemIds));
    setSelectedItems(selectedItems.filter(itm => itm.id !== id))
    setCart({...cart});
  }

  return (
    <Card radius="md" shadow="sm">
      <CardHeader>
        <Checkbox
          color="secondary"
          className="text-sm text-foreground ml-2"
          isSelected={itemSelected}
          onChange={handleSelection}
        >
          {name}
        </Checkbox>
      </CardHeader>

      <CardBody className="overflow-visible ml-4">
        <div className="flex items-center max-lg:flex-col max-lg:items-start max-lg:gap-2">
          <Checkbox
            color="secondary"
            className="text-sm text-foreground max-lg:hidden"
            isSelected={itemSelected}
            onChange={handleSelection}
          >
          </Checkbox>
          <Image
            alt="Card background"
            className="object-cover rounded-md min-w-[170px] max-h-[150px]"
            src={imgsUrl[0]}
            width={180}
            height={150}
          />

          <div className="mx-2 max-lg:ml-0 w-full">
            <div className="flex justify-between">
              <p className="max-w-xl text-md">
                {description}
              </p>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="sm"
                variant="bordered"
                title="remove from cart"
                onPress={handleDeleteFromCart}
              >
                <IconDelete />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold">Price: US ${price}</span>
              <span className="text-xs font-semibold">Shipping: {shipping}</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CartItem;

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
