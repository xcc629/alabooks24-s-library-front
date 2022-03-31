import style from "./SignupForm.module.css";

function SignupForm({ div, type }) {
  return (
    <div className={style.wap}>
      <span>{div}</span>
      <input type={type} />
    </div>
  );
}

export default SignupForm;
