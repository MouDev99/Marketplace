import SideBar from '../SideBar';
import OfferedGoodsView from '../OfferedGoodsView';

function MainContent() {

    return (
        <div className="flex">
            <SideBar />
            <OfferedGoodsView />
        </div>
    )
};

export default MainContent;
