import { useState } from "react";
import {Card, CardBody, Image, Button, Link} from "@nextui-org/react";

function ItemCard({ props }) {
    const { view } = props;
    const {
      id,
      price,
      imgs_url,
      name,
      description,
      listedAt
    } = props.item;
    const dateListed = new Date(listedAt).toDateString();
    const viewIsList = view === "list";
    const [liked, setLiked] = useState(false);

    return (
      <Card
        isBlurred
        className="bg-background/60 dark:bg-default-100/50 p-1 border-0.5"
        shadow="sm"
      >
        <CardBody className={viewIsList ? "flex flex-row gap-5 justify-center" : " relative"}>
            <div className={(viewIsList ? "w-[250px] " : "") + "flex items-center max-w-xs"}>
              <Link href={`/items/${id}`}>
                <Image
                  alt="Item img"
                  className="object-cover w-[400px] h-[300px]"
                  shadow="md"
                  src={imgs_url[0]}
                />
              </Link>
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div
                 className={(viewIsList ? "relative " : "") + "flex justify-between items-start h-full"}
              >
                <div className="flex flex-col gap-0 mt-2">
                  <h1 className="text-large font-semibold text-foreground/90">{name.slice(0, 20)}</h1>
                  <p className={(viewIsList ? "w-[500px] " : "") + "text-small text-foreground/80 pb-4"}>
                    {description.slice(0, 50)}
                  </p>
                  <h2 className="absolute bottom-0.5 font-medium mt-2">
                    ${price} <span className="text-xs text-foreground/80">{dateListed}</span>
                  </h2>
                  <span className={(viewIsList ? "right-0 " : "right-2.5 ") + "absolute bottom-0 text-large"}>
                    <Link
                      href={`/items/${id}`}
                      color="foreground"
                      className="scale-105"
                      isExternal
                      showAnchorIcon
                    >
                    </Link>
                  </span>
                </div>
                <Button
                  isIconOnly
                  className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 mt-3"
                  radius="full"
                  variant="light"
                  onPress={() => setLiked((v) => !v)}
                >
                  <HeartIcon
                    className={liked ? "[&>path]:stroke-transparent" : ""}
                    fill={liked ? "red" : "currentColor"}
                  />
                </Button>
              </div>
            </div>
        </CardBody>
      </Card>
    );
}

export default ItemCard;

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
