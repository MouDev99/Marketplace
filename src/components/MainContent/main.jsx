import { Route, Routes} from "react-router-dom";
import SideBar from "../SideBar";
import OfferedGoodsView from "../OfferedGoodsView";
import FullItemView from "../FullItemView";
import CreateListingForm from "../CreateListingForm";
import ShoppingCart from "../ShoppingCart";

function MainContent() {
  return (
    <div className="flex">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar />
              <OfferedGoodsView />
            </>
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <>
              <SideBar />
              <OfferedGoodsView />
            </>
          }
        />
        <Route path="/:categoryName/item/:itemId" element={<FullItemView />} />
        <Route path="/create/item" element={<CreateListingForm />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default MainContent;
