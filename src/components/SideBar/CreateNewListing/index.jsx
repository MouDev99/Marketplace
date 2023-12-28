import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

function CreateNewListing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap gap-3 w-full">
          <Button
            key="opaque"
            variant="flat"
            color="primary"
            onPress={() => navigate("/create/item")}
            className="capitalize w-full font-bold"
          >
           <span className="scale-150 text-base mb-0.5">+</span>Create New Listing
          </Button>
      </div>

    </>
  );
}

export default CreateNewListing;
