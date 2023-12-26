import { useEffect, useState } from "react";
import {Image} from "@nextui-org/react";

function ItemImages({ imgsUrl }) {
  const [mainImgUrl, setMainImgUrl] = useState('');
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const uniqueImgsUrl = Array.from(new Set(imgsUrl));

  useEffect(() => {
    setMainImgUrl(uniqueImgsUrl[0]);
  }, [imgsUrl]);

  const handleMainImgMouseMove = (e) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  }

  return (
    <div className="flex gap-2 justify-end">
      <div className="mainImgWrapper relative w-[500px] h-[570px]">
        <Image
          alt="item img"
          src={mainImgUrl}
          className="border-2 border-foreground min-w-[500px] w-[500px] h-[570px]"
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={handleMainImgMouseMove}
        />
        <div
           style={{
              display: showMagnifier ? "" : "none",
              position: "absolute",
              zIndex: "10",
              pointerEvents: "none",
              height: "100px",
              width: "150px",
              top: `${y - 50}px`,
              left: `${x - 75}px`,
              opacity: "1",
              border: "1px solid lightgray",
              backgroundColor: "white",
              backgroundImage: `url('${mainImgUrl}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${500 * 1.5}px ${570 * 1.5}px`,
              backgroundPositionX: `${-x * 1.5 + 75}px`,
              backgroundPositionY: `${-y * 1.5 + 50}px`
          }}
        >

        </div>
      </div>

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
                onMouseEnter={(e) => setMainImgUrl(e.target.src)}
              />
            )
          })
        }
      </div>
    </div>
  )
};

export default ItemImages;
