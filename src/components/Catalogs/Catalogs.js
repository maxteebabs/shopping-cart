
import './Catalogs.css';

import Catalog from '../Catalog/Catalog';

const Catalogs = ({catalogs}) => {
  return (
    <div className="catalogs">
      { catalogs.map((catalog, index) => <Catalog key={index} catalog={catalog}></Catalog>) }
    </div>
  );
}
export default Catalogs;