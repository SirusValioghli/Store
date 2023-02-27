import React, { createContext, useEffect, useState } from "react";

//API
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
