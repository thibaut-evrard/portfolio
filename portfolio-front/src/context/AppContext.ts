import { createContext } from 'react';

interface AppContext {
  firstLoad: boolean;
  completeFirstLoad: () => void;
}

export const AppContext = createContext<AppContext>({
  firstLoad: true,
  completeFirstLoad: () => {},
});
