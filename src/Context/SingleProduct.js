import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [single, setSingle] = useState([]);

  return (
    <ProductContext.Provider value={{ single, setSingle }}>
      {children}
    </ProductContext.Provider>
  );
};
