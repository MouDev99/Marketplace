import {useNavigate} from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import Header from './components/Header';
import MainContent from './components/MainContent/main';
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="text-foreground bg-background min-h-screen">
        <Header />
        <MainContent />
      </div>
    </NextUIProvider>
  )
};

export default App;
