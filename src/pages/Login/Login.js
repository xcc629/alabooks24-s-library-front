import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BASE_URL from "../../config";
import SignNav from "../../components/SignNav/SignNav";
import "../Login/Login.scss";
import { ImWarning } from "react-icons/im";

function Login() {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [requestMessage, setrequestMessage] = useState("");
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };
  const postLoginData = () => {
    fetch(`${BASE_URL}/members/login`, {
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
      .then((result) => setrequestMessage(result));
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <style>{"body { background-color: rgb(238, 250, 243); }"}</style>
        </Helmet>
      </HelmetProvider>
      <SignNav />
      <section className="loginMain">
        <div className="loginForm">
          <input
            type="text"
            placeholder="아이디"
            onKeyUp={(e) => setIdValue(e.target.value)}
          />
          <form>
            <input
              type="password"
              placeholder="비밀번호"
              onKeyUp={(e) => setPasswordValue(e.target.value)}
              autoComplete="off"
            />
          </form>
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
        {requestMessage.message && (
          <span className="warningUp">
            <ImWarning />
            {`${requestMessage.message}`}
          </span>
        )}
        <button className="button" onClick={postLoginData}>
          로그인
        </button>
        <button className="signupButton" onClick={goToSignup}>
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Login;
