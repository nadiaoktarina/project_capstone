import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    nama: 'Zulkipli', 
    fotoProfil: 'https://i.ibb.co/y4FN5bm/avatar.png',
    tinggi: '',
    usia: '',
    berat: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};