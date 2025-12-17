import { createContext, useRef } from "react";

export const CardContext = createContext(null);

export function CardProvider({ children }) {
  const cardRef = useRef(null);

  return (
    <CardContext.Provider value={{ cardRef }}>
      {children}
    </CardContext.Provider>
  );
}