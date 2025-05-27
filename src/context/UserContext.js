import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // sementara true
  const [userData, setUserData] = useState({
    nama: "",
    usia: "",
    tinggiBadan: "",
    beratBadan: "",
    fotoProfil: "",
  });

  const updateUserData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};
