/** @format */

import { createContext, useState, useCallback } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const onUpdateUserList = useCallback((data) => {
    setUserList(data);
  }, []);

  return (
    <UserContext.Provider value={{ userList, onUpdateUserList }}>
      {children}
    </UserContext.Provider>
  );
};
