import { createContext } from "react";

const AppContext = createContext({
  step: 1,
  setSteps: () => {},
});

export default AppContext;
