import { useState } from "react";
import style from "./SignupForm.module.css";

function SignupForm({ div, after, type, valueName, setValue }) {
  const [changeStyle, setChangeStyle] = useState(style.beforeClick);
  const [changeStr, setchangeStr] = useState(div);

  const clickInput = (e) => {
    setchangeStr(after);
    setChangeStyle(style.click);
  };

  const unClcikInput = (e) => {
    if (changeStyle === style.click && e.target.value) {
      setChangeStyle(style.afterClick);
      setchangeStr(div);
    }
  };

  const setValueHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={style.wap}>
      <span className={changeStyle}>{changeStr}</span>
      <input
        type={type}
        onFocus={clickInput}
        onBlur={unClcikInput}
        onChange={setValueHandler}
      />
    </div>
  );
}

export default SignupForm;
