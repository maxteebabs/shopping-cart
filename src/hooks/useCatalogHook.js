import { useState } from "react";
import { catalogService } from "../service/catalogService";

const useCatalogHook = () => {
  const [ catalogItems, setCatalogItems ] = useState([]);
  const getCatalogs = async() => {
    const items = await catalogService.getCatalogs();
    setCatalogItems(items);
  };

  getCatalogs();
  return {
    catalogs: catalogItems
  }
}

export default useCatalogHook;