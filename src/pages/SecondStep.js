import React, { useState } from "react";
import Input from "../components/Input";
import FormContext from "../context/form.context";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const FirstStep = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    password: "",
    repeatedPassword: "",
    hint: "",
  });
  const [errors, setErrors] = useState();

  const valueProvider = { values, setValues };

  const validateForm = () => {
    const { name, password, repeatedPassword, hint } = values;
    const formErrors = {};
    if (!name) formErrors.name = "Name empty";
    if (hint.length > 60) formErrors.hint = "Hint too long";
    if (password.length < 8)
      formErrors.password = "Password needs to have at least 8 characters";
    if (password.length > 24) formErrors.password = "Password too long";
    if (!/[A-Z]/.test(password))
      formErrors.password = "Password needs 1 capital letter";
    if (!password) formErrors.password = "Password empty";

    if (password !== repeatedPassword)
      formErrors.repeatedPassword = "Password does not match";
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // This logic would need to be modified in order to apply the async function to simulate an API
      //  all
      return true;
    }
    return false;
  };
  return (
    <FormContext.Provider value={valueProvider}>
      <div className="relative">
        <div className="form-group">
          <Input
            labelName={t("crear usuario")}
            name="name"
            placeholder="Introduce tu usuario"
            required
            errors={errors?.name}
          />
        </div>
        <div className="form-group">
          <Input
            password
            halfWidth
            labelName={t("crear contraseña")}
            name="password"
            placeholder={t("crear contraseña")}
            required
            errors={errors?.password}
            passwordHinter
          />
          <Input
            password
            halfWidth
            labelName={t("Repite tu contraseña")}
            name="repeatedPassword"
            placeholder={t("Repite tu contraseña")}
            required
            errors={errors?.repeatedPassword}
            passwordHinter
          />
        </div>
        <p style={{ margin: "50px 0" }}>{t("hint")}</p>
        <div className="form-group">
          <Input
            labelName={t("crear pista")}
            name="hint"
            placeholder="Introduce tu pista"
            errors={errors?.hint}
            counter
          />
        </div>
        <Footer validate={validateForm} />
      </div>
    </FormContext.Provider>
  );
};
export default FirstStep;
