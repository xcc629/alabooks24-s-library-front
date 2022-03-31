import SignNav from "../../components/SignNav/SignNav";
import GreenButton from "../../components/GreenButton/GreenButton";
import SignupForm from "../../components/SignupForm/SignupForm";

import "./Signup.scss";
import "../../components/SignupForm/SignupForm.module.css";

function Signup() {
  const datas = [
    {
      id: 1,
      div: "아이디",
      type: "text",
    },
    {
      id: 2,
      div: "비밀번호",
      type: "password",
    },
    {
      id: 3,
      div: "비밀번호 확인",
      type: "password",
    },
    {
      id: 4,
      div: "이메일 주소",
      type: "email",
    },
  ];

  return (
    <div>
      <SignNav />
      <section className="signupWap">
        <div className="signupIdWap">
          {datas.map((data) => {
            return (
              data.id === 1 && <SignupForm div={data.div} type={data.type} />
            );
          })}
        </div>
        <span className="warning">! 아이디를 입력해주세요.</span>
        <div className="signupPasswordsWap">
          {datas.map((data) => {
            return (
              data.id > 1 &&
              data.id < 4 && <SignupForm div={data.div} type={data.type} />
            );
          })}
        </div>
        <span className="warning">! 비밀번호를 입력해주세요.</span>
        <div className="signupEmail">
          {datas.map((data) => {
            return (
              data.id === 4 && <SignupForm div={data.div} type={data.type} />
            );
          })}
        </div>
        <span className="warning">! 이메일을 입력해주세요.</span>
        <GreenButton span={"회원 가입 완료"} />
      </section>
    </div>
  );
}

export default Signup;
