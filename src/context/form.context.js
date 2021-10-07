import { createContext } from "react";

const FormContext = createContext({
  values: {
    name: "",
    password: "",
    repeatedPassword: "",
    hint: "",
  },
  setValues: () => {},
});

export default FormContext;
