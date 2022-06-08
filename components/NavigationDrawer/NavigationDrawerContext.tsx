import { useState, createContext, ReactNode } from "react";

interface NavigationDrawerContextProviderProps {
  children: ReactNode;
}

interface NavigationDrawerContextInterface {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const NavigationDrawerContext = createContext<NavigationDrawerContextInterface>(
  {
    isOpen: false,
    openDrawer: () => {},
    closeDrawer: () => {},
  }
);

const NavigationDrawerContextProvider = ({
  children,
}: NavigationDrawerContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return (
    <NavigationDrawerContext.Provider
      value={{
        isOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </NavigationDrawerContext.Provider>
  );
};

export { NavigationDrawerContextProvider, NavigationDrawerContext };
