import './Styles.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Catalogs from './components/Catalogs/Catalogs';
import useCatalogHook from './hooks/useCatalogHook';

function App() {
  const { catalogs } = useCatalogHook();
  return (
   <>
    <Header />
    <div className='wrapper'>
      <Sidebar catalogs={catalogs} />
      <Catalogs catalogs={catalogs} />
    </div>
    
   </>
  );
}

export default App;
