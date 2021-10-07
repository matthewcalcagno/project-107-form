import React, { useContext } from "react";
import AppContext from "../context/app.context";
import Step from "./Step";
const Header = () => {
  // This may seem like setSteps is not being used but it is. The Context is using the function
  const { steps, setSteps } = useContext(AppContext);
  return (
    <div className="header">
      <Step number={1} currentStep={steps} />
      <div
        className={`step-bridge ${
          steps >= 2 ? "steps-passed" : "steps-not-passed"
        } `}
      ></div>
      <Step number={2} currentStep={steps} />
      <div
        className={`step-bridge ${
          steps >= 3 ? "steps-passed" : "steps-not-passed"
        } `}
      ></div>
      <Step number={3} currentStep={steps} />
    </div>
  );
};

export default Header;
