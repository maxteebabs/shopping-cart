
import useCatalogHook from '../../hooks/useCatalogHook';
import Catalog from '../Catalog/Catalog';

const Catalogs = () => {
  const { catalogs } = useCatalogHook();
 
  return (
    <div className="catalogs">
      { catalogs.map((catalog, index) => <Catalog key={index} catalog={catalog}></Catalog>) }
    </div>
  );
}
export default Catalogs;