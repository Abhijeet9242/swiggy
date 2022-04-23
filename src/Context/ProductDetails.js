import { createContext, useState } from "react";

export const ProductDetailsContext = createContext();

export const ProductDetailsContextProvider = ({ children }) => {
  const [proddetails, setProddetails] = useState([]);

  return (
    <ProductDetailsContext.Provider value={{ proddetails, setProddetails }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};
