import Header from './components/Header';
import MainContent from './components/MainContent/main';
import './App.css'

function App() {

  return (
    <div className="app dark text-foreground bg-background min-h-screen"
    >
      <Header />
      <MainContent />
    </div>
  )
};

export default App;
