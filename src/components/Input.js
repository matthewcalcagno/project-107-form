import React, { useContext, useRef, useState } from "react";
import FormContext from "../context/form.context";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = (props) => {
  const {
    name,
    placeholder,
    labelName,
    halfWidth,
    password,
    required,
    errors,
    passwordHinter,
    counter,
  } = props;
  const { values, setValues } = useContext(FormContext);
  const [showPassword, setShowPassword] = useState(
    passwordHinter ? false : true
  );
  const passwordHinterRef = useRef();
  const handleChange = (newValue) => {
    setValues({ ...values, [name]: newValue.target.value });
    if (passwordHinter) {
      if (!newValue.target.value.length) {
        passwordHinterRef.current.classList.remove("password-hinter-medium");
      } else if (newValue.target.value.length < 10) {
        passwordHinterRef.current.classList.remove("password-hinter-good");
        passwordHinterRef.current.classList.add("password-hinter-medium");
      } else {
        passwordHinterRef.current.classList.remove("password-hinter-medium");
        passwordHinterRef.current.classList.add("password-hinter-good");
      }
    }
  };

  return (
    <label
      style={{ paddingRight: password ? "20px" : "initial" }}
      className={`relative ${halfWidth ? "w-half" : "w-full"}`}
      htmlFor={name}
    >
      <strong>{labelName}</strong>
      <input
        type={`${showPassword ? "text" : "password"}`}
        className="form-control "
        id={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        name={name}
        required={required}
        style={{ borderColor: errors ? "red" : "initial", padding: "25px" }}
      />
      {passwordHinter && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="password-eye"
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      )}
      {passwordHinter && (
        <div ref={passwordHinterRef} className={`password-hinter`}></div>
      )}
      {errors && <p style={{ position: "absolute", color: "red" }}>{errors}</p>}
      {counter && <p className="word-counter">{values[name].length} / 60</p>}
    </label>
  );
};

export default Input;
