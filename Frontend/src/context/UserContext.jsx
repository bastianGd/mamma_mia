import { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); 

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUserContext = () => useContext(UserContext);
