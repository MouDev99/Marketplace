import { useParams } from "react-router-dom";

function OfferedGoodsView() {
    const { name } = useParams();

    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
};

export default OfferedGoodsView;
