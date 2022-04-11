import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

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

  const users = {
    loginId: idValue,
    password: pwValue,
    passwordConfirm: rePwValue,
    emailAddress: email,
  };

  const onClick = () => {
    postHandler();
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      postHandler();
    }
  };

  const postHandler = () => {
    fetch("/members/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: rgb(238, 250, 243); }"}</style>
      </Helmet>
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
                  onKeyDown={onKeyDown}
                />
              )
            );
          })}
        </div>
        <span className={idValue > 4 ? "warningDown" : "warningUp"}>
          ! 5~10자의 영문 소문자와 숫자로만 입력해주세요.
        </span>
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
                  onKeyDown={onKeyDown}
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
                  onKeyDown={onKeyDown}
                />
              )
            );
          })}
        </div>
        <span className={pwValue === "" ? "warningUp" : "warnginDown"}>
          ! 비밀번호를 입력해주세요.
        </span>
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
                  onKeyDown={onKeyDown}
                />
              )
            );
          })}
        </div>
        <span className="warning">! 이메일을 입력해주세요.</span>
        <GreenButton span={"회원 가입 완료"} onClick={onClick} />
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
