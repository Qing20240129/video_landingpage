/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const defaultContext = {
  showBookDemo: false,
  updateShowBookDemo: (value: boolean) => {},
};

const GlobalContext = createContext(defaultContext);

interface GlobalContextProps {
  showBookDemo: boolean;
  updateShowBookDemo: (value: boolean) => void;
}

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showBookDemo, setShowBookDemo] = useState(false);

  const updateShowBookDemo = (value: boolean) => {
    setShowBookDemo(value);
  };

  return (
    <GlobalContext.Provider value={{ showBookDemo, updateShowBookDemo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextProps =>
  useContext(GlobalContext);
