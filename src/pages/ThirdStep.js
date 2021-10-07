import React from "react";
import Success from "../assets/img/success.png";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const ThirdStep = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div style={{ display: "flex" }}>
        <img src={Success} alt="Success logo"/>
        <div style={{ marginLeft: "40px" }}>
          <h1>{t("cuenta creada")}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu
            maximus, feugiat augue vel, tempus nunc. Vestibulum diam dui,
            vestibulum ac sapien varius, lobortis efficitur ligula. Curabitur
            ullamcorper venenatis aliquet. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            convallis gravida quam id lacinia. Ut fringilla commodo
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThirdStep;
