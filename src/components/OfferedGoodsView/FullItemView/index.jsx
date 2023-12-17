import { useNavigate, useParams } from "react-router-dom";

function FullItemView() {
    const { itemId } = useParams();
    const navigate = useNavigate();
    return (
        <div className="absolute rounded-xl top-0 m-3 w-full h-full bg-zinc-600">
            <h1>Hello From FullItemView! itemNum: {itemId}</h1>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
};

export default FullItemView;
