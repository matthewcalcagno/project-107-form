import React, { useContext } from "react";
import AppContext from "../context/app.context";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { steps, setSteps } = useContext(AppContext);
  const { condition, validate } = props;
  const nextStep = steps + 1;
  const { t } = useTranslation();
  const previousStep = steps - 1;
  return (
    <div className="container flex justify-between margin-top-50">
      <hr></hr>
      {steps > 1 && (
        <button className="button-left" onClick={() => setSteps(previousStep)}>
          {t("atras")}
        </button>
      )}
      {steps < 3 && (
        <button
          className="button-right button-right-bg"
          disabled={condition}
          onClick={() =>
            validate ? validate() && setSteps(nextStep) : setSteps(nextStep)
          }
        >
          {t("siguiente")} <KeyboardArrowRightIcon />
        </button>
      )}
      {steps === 3 && (
        <button
          className="button-right button-right-no-bg"
          disabled={condition}
          onClick={() => (validate ? validate() && setSteps(1) : setSteps(1))}
        >
          {t("volver")}
        </button>
      )}
    </div>
  );
};

export default Footer;
