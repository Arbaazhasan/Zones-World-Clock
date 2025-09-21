import Clock from './components/Clock/Clock';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Clocks from './components/Clocks/Clocks';
import AddCity from './components/AddCity/AddCity';
import { Toaster } from 'react-hot-toast';
import { useClose } from './hooks/useClose.hook';

const App = () => {

  const [isClose, setIsClose] = useClose();

  return (
    <div className='app'>
      <Toaster />

      {
        isClose && <AddCity setIsClose={setIsClose} />
      }

      <Header />
      <Clocks />
      <Footer setIsClose={setIsClose} />

    </div>
  );
}

export default App;
