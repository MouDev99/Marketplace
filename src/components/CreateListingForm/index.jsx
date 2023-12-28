import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";

function CreateListingForm() {

  const categories = [
    "Accessories",
    "Clothing",
    "Electronics",
    "Furniture",
    "Home Appliances",
    "Office Supplies",
    "Pet Supplies",
    "Shoes",
    "Sports & Entertainment",
    "Toys & Games"
  ];

  const shippingMethods = [
    "choice",
    "plus",
    "free"
  ];

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("you clicked submit")
  }

  return (
    <Card className="mx-auto p-5 mt-4 min-w-[545px]">
      <CardHeader className="flex justify-center bg-primary text-xl">
        <h1 className="text-xl text-white">List a new item</h1>
      </CardHeader>
      <CardBody>
        <div className="my-3">
          <p>-Fill in the details of your item to list it on the marketplace.</p>
          <p>-All fields with <span className="text-danger">*</span> are required.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-0 grid-cols-2">
          <div className="grid gap-7 border-r-1 p-2 pr-4">
            <Input type="text" label="Title"
              labelPlacement="outside" placeholder="Enter your title"
              size="lg" variant="bordered"
              className="max-w-xs" isRequired
            />
            <Textarea label="Description" variant="bordered"
              labelPlacement="outside" placeholder="Enter your description"
              className="max-w-xs" isRequired
              size="lg"
            />
            <Input type="number" label="Price"  size="lg" variant="bordered"
              placeholder="0.00" labelPlacement="outside"
              className="max-w-xs" isRequired
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
            <Select items={categories} label="Category" variant="bordered" labelPlacement="outside"
               size="lg" placeholder="Select a category" className="max-w-xs" isRequired
            >
              {categories.map((category, i) => <SelectItem key={i}>{category}</SelectItem>)}
            </Select>
          </div>
          <div className="grid gap-9 p-2 pl-4">
            <Input type="file" label="Upload images" variant="bordered" placeholder="0.00"
              labelPlacement="outside" className="max-w-xs" isRequired size="lg"
              classNames={{ input: "pt-[7px]" }}
            />
            <Select items={shippingMethods} label="Shipping" labelPlacement="outside"
              placeholder="Select a shipping method" className="max-w-xs" isRequired
              size="lg" variant="bordered"
            >
              {shippingMethods.map((method, i) => <SelectItem key={i}>{method}</SelectItem>)}
            </Select>
            <Input type="text" label="Your name" labelPlacement="outside"
              placeholder="Enter your name" size="lg" variant="bordered"
              className="max-w-xs" isRequired
            />
            <Input type="text" label="Phone" labelPlacement="outside" placeholder="Enter your Phone number"
              size="lg" variant="bordered" className="max-w-xs" isRequired
            />
          </div>
          <Button
            className="mt-4 col-span-2 text-xl"
            color="primary"
            type="submit"
          >
            List Item
          </Button>
        </form>
      </CardBody>
    </Card>
  )
};

export default CreateListingForm;
