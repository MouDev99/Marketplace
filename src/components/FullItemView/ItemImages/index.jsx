import { useEffect, useState } from "react";
import {Image} from "@nextui-org/react";

function ItemImages({ imgsUrl }) {
  const [mainImgUrl, setMainImgUrl] = useState('');
  const uniqueImgsUrl = Array.from(new Set(imgsUrl));

  useEffect(() => {
    setMainImgUrl(uniqueImgsUrl[0]);
  }, [imgsUrl]);

  return (
    <div className="flex gap-2 justify-end">
      <Image
        alt="item img"
        src={mainImgUrl}
        className="border-2 border-foreground min-w-[500px] w-[500px] h-[570px]"
      />
      <div className="flex flex-col gap-2">
        {
          uniqueImgsUrl.map((url, i) => {
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
