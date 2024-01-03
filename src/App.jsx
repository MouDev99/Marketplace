import {useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import Header from './components/Header';
import MainContent from './components/MainContent/main';
import FilterContextProvider from './context/filter-context';
import CartContextProvider from './context/cart-context';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
       <FilterContextProvider>
          <CartContextProvider>
            <div className="text-foreground bg-background min-h-screen">
              <Header />
              <MainContent />
            </div>
          </CartContextProvider>
       </FilterContextProvider>
    </NextUIProvider>
  )
};

export default App;
