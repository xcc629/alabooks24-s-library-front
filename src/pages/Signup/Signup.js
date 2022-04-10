import { useState, useEffect, useRef } from "react";

import SignNav from "../../components/SignNav/SignNav";
import GreenButton from "../../components/GreenButton/GreenButton";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./Signup.scss";
import "../../components/SignupForm/SignupForm.module.css";

function Signup() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setpwValue] = useState("");
  const [rePwValue, setRePwValue] = useState("");
  const [email, setEmail] = useState("");

  const button = useRef();

  const onClick = () => {
    const users = {
      loginId: idValue,
      password: pwValue,
      passwordConfirm: rePwValue,
      emailAddress: email,
    };

    if (pwValue === rePwValue) {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      return;
    }
  };

  return (
    <div>
      <SignNav />
      <section className="signupWap">
        <div className="signupIdWap">
          {datas.map((data) => {
            return (
              data.id === 1 && (
                <SignupForm
                  key={data.id}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setIdValue}
                />
              )
            );
          })}
        </div>
        <span className="warning">! 아이디를 입력해주세요.</span>
        <div className="signupPasswordsWap">
          {datas.map((data) => {
            return (
              data.id === 2 && (
                <SignupForm
                  key={data.id}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setpwValue}
                />
              )
            );
          })}
        </div>
        <div className="signupRePasswordsWap">
          {datas.map((data) => {
            return (
              data.id === 3 && (
                <SignupForm
                  key={data.id}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setRePwValue}
                />
              )
            );
          })}
        </div>

        <span className="warning">! 비밀번호를 입력해주세요.</span>
        <div className="signupEmail">
          {datas.map((data) => {
            return (
              data.id === 4 && (
                <SignupForm
                  key={data.id}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setEmail}
                />
              )
            );
          })}
        </div>
        <span className="warning">! 이메일을 입력해주세요.</span>
        <GreenButton
          span={"회원 가입 완료"}
          forwrdedref={button}
          onClick={onClick}
        />
      </section>
    </div>
  );
}

export default Signup;
const datas = [
  {
    id: 1,

    div: "아이디",
    after: "5~10자 영문, 숫자",
    type: "text",
  },
  {
    id: 2,

    div: "비밀번호",
    after: "8자 이상",
    type: "password",
  },
  {
    id: 3,

    div: "비밀번호 확인",
    after: "비밀번호 재입력",
    type: "password",
  },
  {
    id: 4,

    div: "이메일 주소",
    after: "이메일 주소 입력",
    type: "email",
  },
];
