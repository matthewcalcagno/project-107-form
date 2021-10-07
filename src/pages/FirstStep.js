import React, { useState } from "react";
import Footer from "../components/Footer";
import Logo from "../assets/img/Logotipo-Vertical-Verde-Alta.png";
import { useTranslation } from "react-i18next";

const FirstStep = () => {
  const { t } = useTranslation();
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <div className="relative">
      <div className="first-logo">
        <img src={Logo} alt="Main logo" />
      </div>

      <h2>{t("page.1.title")}</h2>
      <p>{t("page.1.text1")}</p>
      <p>{t("page.1.text2")}</p>
      <p>{t("page.1.text3")}</p>
      <label>
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <span style={{ fontSize: 19, marginLeft: 10 }}>
          {t("page.1.consent")}
        </span>
      </label>
      <Footer condition={!acceptTerms} />
    </div>
  );
};
export default FirstStep;
