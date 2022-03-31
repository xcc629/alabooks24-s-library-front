import SignNav from "../../components/SignNav/SignNav";
import GreenButton from "../../components/GreenButton/GreenButton";
import SignupForm from "../../components/SignupForm/SignupForm";

import "./Signup.scss";

function Signup() {
  return (
    <div>
      <SignNav />
      <section className="signupWap">
        <div className="signupIdWap">
          <SignupForm div={"아이디"} type={"text"} />
        </div>
        <span className="warning">! 아이디를 입력해주세요.</span>
        <div className="signupPasswordsWap">
          <SignupForm div={"비밀번호"} type={"password"} />
          <SignupForm div={"비밀번호 확인"} type={"password"} />
        </div>
        <span className="warning">! 비밀번호를 입력해주세요.</span>
        <div className="signupEmail">
          <SignupForm div={"이메일 주소"} type={"email"} />
        </div>
        <span className="warning">! 이메일을 입력해주세요.</span>
        <GreenButton span={"회원 가입 완료"} />
      </section>
    </div>
  );
}

export default Signup;
