import { useState, createContext, FC, ReactNode } from "react";

interface UserInterface {
  username: string;
}

type UserType = UserInterface | null;

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextInterface {
  user: UserType;
  signIn: () => void;
  signOut: () => void;
}

const UserContext = createContext<UserContextInterface>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType>(null);

  function signIn(): void {
    setUser({
      username: "brian",
    });
  }

  function signOut(): void {
    setUser(null);
  }

  const value: UserContextInterface = {
    user,
    signIn,
    signOut,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
