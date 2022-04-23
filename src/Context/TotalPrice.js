import { createContext, useState } from "react";

export const TotalPriceContext = createContext();

export const TotalPriceContextProvider = ({ children }) => {
  const [price, setPrice] = useState(0);

  return (
    <TotalPriceContextProvider value={{ price, setPrice }}>
      {children}
    </TotalPriceContextProvider>
  );
};
