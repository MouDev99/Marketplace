import { Avatar, Button , Card, CardBody, CardHeader} from "@nextui-org/react";

function ItemDetails() {
  return (
    <div className=" flex flex-col gap-4 pb-2 pl-2 pr-4 min-w-[400px] w-fit">
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">Product Name</h1>
        <div>
          <p>This is the product description. It provides necessary information about the product.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Price: $99</h3>
        </div>
      </div>
      <Card className="">
        <CardHeader>
          <h1>Seller Information</h1>
        </CardHeader>
        <CardBody>
          <div className="flex items-center gap-2">
          <Avatar name="Joe" />
            <div>
              <h3 className="font-bold">Seller Name</h3>
              <p>Additional Seller Information</p>
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
