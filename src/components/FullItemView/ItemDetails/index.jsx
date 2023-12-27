import { Avatar, Button , Card, CardBody, CardHeader} from "@nextui-org/react";

function ItemDetails({ item }) {
  const {
    name, price,
    description, shipping,
    seller, listedAt
  } = item;
  const dateListed = new Date(listedAt).toDateString();
  const timeListed = new Date(listedAt).toTimeString();

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
        <Button size="lg">Add to wish list</Button>
      </div>
    </div>
  )
}

export default ItemDetails;
