import React, { useState } from 'react';
import { MenuContext } from './MenuContext';

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuIndex, setMenuIndex] = useState<number>(0);

  const updateIndex = (index: number) => {
    setMenuIndex(index);
  };

  const value = {
    menuIndex,
    updateIndex,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuProvider;
