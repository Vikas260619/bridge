import React from 'react';

export interface IUserContext {
  user: IUser | null;
  updateIsAuthenticated: (status: boolean) => void;
  updateUser: (user: IUser | null) => void;
  isAuthenticated: boolean | undefined;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  company: {
    id: number;
    name: string;
    status: string;
  };
}

export const UserContext = React.createContext<IUserContext>(null!);

// export function useUser() {
//   return React.useContext(UserContext);
// }
