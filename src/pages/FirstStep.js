import React, { useState } from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const FirstStep = () => {
  const { t } = useTranslation();
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <div className="relative">
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
