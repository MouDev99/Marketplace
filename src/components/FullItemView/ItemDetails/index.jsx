import { useEffect, useState } from "react";
import { Avatar, Button , Card, CardBody, CardHeader} from "@nextui-org/react";
import { useCart } from "../../../context/cart-context";

function ItemDetails({ item }) {
  const {
    id, name, price,
    description, shipping,
    seller, listedAt
  } = item;
  const dateListed = new Date(listedAt).toDateString();
  const timeListed = new Date(listedAt).toTimeString();

  const {cart, setCart} = useCart();
  const [liked, setLiked] = useState(false);

    const handleLikePress = () => {
      let cartItemIds = JSON.parse(localStorage.getItem("cartItemIds")) || [];

      if (liked) {
        delete cart[id];
        cartItemIds = cartItemIds.filter(cartItemId => cartItemId !== id);
      } else {
        cart[id] = item;
        cartItemIds.push(id);
      }

      localStorage.setItem("cartItemIds", JSON.stringify(cartItemIds));
      setCart({...cart});
      setLiked((prev) => !prev);
    };

    useEffect(() => {
      const isItemInCart = cart[id] !== undefined;
      if (isItemInCart) setLiked(true);
    }, [id]);

  return (
    <div className=" flex flex-col gap-4 pb-2 pl-2 pr-4 min-w-[400px] w-fit">
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Price: ${price}</h3>
        </div>
        <div>
          <h4 className="font-semibold text-foreground/80">Shipping: {shipping}</h4>
          <span className="text-xs text-foreground/80">Listed At: {dateListed} | {timeListed}</span>
        </div>
      </div>
      <Card className="">
        <CardHeader>
          <h1>Seller Information</h1>
        </CardHeader>
        <CardBody>
          <div className="flex items-center gap-2">
          <Avatar name={seller.name} />
            <div>
              <h3 className="font-bold">{seller.name}</h3>
              <p>Phone: {seller.phone}</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          onPress={handleLikePress}
        >
          <HeartIcon
            className={liked ? "[&>path]:stroke-transparent" : ""}
            fill={liked ? "red" : "currentColor"}
          />
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  )
}

export default ItemDetails;


const HeartIcon = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  ...props
  }) => (
  <svg
      aria-hidden="true"
      fill={fill}
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
  >
      <path
      d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      />
  </svg>
);
