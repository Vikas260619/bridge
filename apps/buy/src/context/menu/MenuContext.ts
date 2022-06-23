import React from 'react';

export interface IMenuContext {
  menuIndex: number;
  updateIndex: (index: number) => void;
}

export const MenuContext = React.createContext<IMenuContext>(null!);
