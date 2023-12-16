import { useNavigate, useParams } from "react-router-dom";

function FullItemView() {
    const { itemId } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello From FullItemView! itemNum: {itemId}</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
};

export default FullItemView;
