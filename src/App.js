import './Styles.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Catalogs from "./components/Catalogs/Catalogs";
import useCatalogHooks from "./hooks/useCatalogHooks";

function App() {
const { catalogs, filterByBrands, defaultBrands, handlePriceFilter} = useCatalogHooks();

  return(
    <>
      <Header />
      <div className="wrapper">
        <Sidebar catalogs={catalogs} filterByBrands={filterByBrands} defaultBrands={defaultBrands} handlePriceFilter={handlePriceFilter} />
        <Catalogs catalogs={catalogs} />
      </div>
    </>
  )
} 
export default App;