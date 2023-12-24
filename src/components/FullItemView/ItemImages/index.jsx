import { useState } from "react";
import {Image} from "@nextui-org/react";

function ItemImages() {
  const imgs = [
    // { url: "https://i.pravatar.cc/" },
    // { url: "https://i.pravatar.cc/" },
    // { url: "https://i.pravatar.cc/" },
    // { url: "https://i.pravatar.cc/" },
    { url: "https://i.pinimg.com/736x/6b/61/6f/6b616fd847a9648d6c9d14fa499fb831.jpg"},
    { url: "https://i.pinimg.com/736x/2e/a2/54/2ea254bc0b7389813dee31dd38ba5e9e.jpg"},
    { url: "https://i.pinimg.com/736x/57/2b/c5/572bc53ce23f9db823af275d50046c21.jpg"},
    { url: "https://i.pinimg.com/736x/a6/5e/87/a65e87dfc5745891c166a687f0b7e989.jpg"}
  ];
  const [mainImgUrl, setMainImgUrl] = useState(imgs[0].url);

  return (
    <div className="flex gap-2 justify-end">
      <Image
        alt="item img"
        src={mainImgUrl}
        className="border-2 border-foreground min-w-[500px] w-[500px] h-[570px]"
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
