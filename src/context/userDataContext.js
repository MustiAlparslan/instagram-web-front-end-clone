import { createContext, useContext, useState } from "react";

const Context = createContext();


export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const data = { userData, setUserData };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useUserData = () => useContext(Context);