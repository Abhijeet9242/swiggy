import { createContext, useState } from "react";

export const TotalPriceContext = createContext();

export const TotalPriceContextProvider = ({ children }) => {
  const [price, setPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ price, setPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};
