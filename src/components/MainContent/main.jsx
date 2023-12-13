import { Route, Routes } from 'react-router-dom';
import SideBar from '../SideBar';
import OfferedGoodsView from '../OfferedGoodsView';

function MainContent() {

    return (
        <div className="flex">
            <SideBar />
            <Routes>
                <Route path='/' element={<OfferedGoodsView />} />
                <Route path={`/category/:name`} element={<OfferedGoodsView />} />
            </Routes>
        </div>
    )
};

export default MainContent;
