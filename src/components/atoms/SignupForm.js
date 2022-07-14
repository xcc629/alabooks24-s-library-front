import React from "react";
import { useState } from "react";
import style from "./SignupForm.module.css";

function SignupForm({
  name,
  div,
  after,
  type,
  setValue,
  onKeyDownEnter,
  onValidate,
  autoComplete,
}) {
  const [changeStyle, setChangeStyle] = useState(style.beforeClick);
  const [changeStr, setchangeStr] = useState(div);

  const clickInput = (e) => {
    setchangeStr(after);
    setChangeStyle(style.click);
  };

  const unClickInput = (e) => {
    changeStyle === style.click && onValidate();

    if (changeStyle === style.click && e.target.value) {
      setChangeStyle(style.afterClick);
      setchangeStr(div);
    }
  };

  const setValueHandler = (e) => {
    const { name, value } = e.target;

    setValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className={style.wap}>
      <span className={changeStyle}>{changeStr}</span>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name={name}
          type={type}
          onFocus={clickInput}
          onBlur={unClickInput}
          onChange={setValueHandler}
          onKeyDown={onKeyDownEnter}
          autoComplete={autoComplete}
        />
      </form>
    </div>
  );
}

export default SignupForm;
