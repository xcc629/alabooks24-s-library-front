import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignNav from "../../components/SignNav/SignNav";
import GreenButton from "../../components/GreenButton/GreenButton";
import "../Login/Login.scss";

function Login() {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  const postLoginData = () => {
    fetch("/members/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: idValue,
        password: passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <SignNav />
      <section className="loginMain">
        <div className="loginForm">
          <input
            type="text"
            placeholder="아이디"
            onKeyUp={(e) => setIdValue(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onKeyUp={(e) => setPasswordValue(e.target.value)}
          />
          <div className="loginOptionBox">
            <label>
              <input type="checkbox" name="auto_login" value="0" />
              <span>로그인 상태 유지</span>
            </label>
            <div>
              <span>아이디 찾기</span>
              <span>비밀번호 재설정</span>
            </div>
          </div>
        </div>
        <GreenButton span={"로그인"} onClick={postLoginData()} />
        <button className="signupButton" onClick={goToSignup}>
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Login;
