import { createContext, useContext, useState } from 'react';

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [is_nav_open, set_is_nav_open] = useState(false);
  const handle_nav_bar = () => set_is_nav_open((prev = !prev));
  return (
    <NavContext.Provider
      value={{
        is_nav_open,
        handle_nav_bar,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
