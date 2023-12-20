import { useState } from "react";
import {Image} from "@nextui-org/react";

function ItemImages() {
  const imgs = [
    { url: "https://i.pravatar.cc/" },
    { url: "https://i.pravatar.cc/" },
    { url: "https://i.pravatar.cc/" },
    { url: "https://i.pravatar.cc/" },
  ];
  const [mainImgUrl, setMainImgUrl] = useState(imgs[0].url);

  return (
    <div className="flex gap-2 justify-end">
      <Image
        alt="item img"
        src={mainImgUrl}
        className="border-2 border-foreground min-w-[500px] w-[500px] h-[550px]"
      />
      <div className="flex flex-col gap-2">
        {
          imgs.map(({ url }, i) => {
            return (
              <Image
                key={i}
                width={90}
                alt="item img"
                src={url}
                className={`${mainImgUrl === url ? "border-2 border-foreground" : ""} cursor-pointer min-w-[70px] w-[70px] h-[75px]`}
                onClick={(e) => setMainImgUrl(e.target.src)}
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default ItemImages;
