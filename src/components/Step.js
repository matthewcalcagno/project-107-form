import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const Step = (props) => {
  const { number, currentStep } = props;
  if (currentStep > number) {
    return (
      <div className={`step steps-passed`}>
        <CheckIcon />
      </div>
    );
  }

  return (
    <div
      className={`step ${
        currentStep >= number ? "steps-passed" : "steps-not-passed"
      } `}
    >
      {number}
    </div>
  );
};

export default Step;
