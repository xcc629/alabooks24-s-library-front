import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { setLoginCookie } from "../../utils/cookie";
import { UserDispatchContext } from "../../context/context";
import { postLoginData } from "../../apis/user";

import SignNav from "../../components/navs/SignNav";

import { LoginMain, WarningUp } from "./LoginStyled";
import { ImWarning } from "react-icons/im";

function Login() {
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);
  const [requestMessage, setrequestMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useContext(UserDispatchContext);

  const goToMain = () => {
    navigate("/");
  };
  const goToSignup = () => {
    navigate("/signup");
  };

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      onLogin();
    }
  };
  const onKeepLogin = () => {
    setKeepLogin((prev) => !prev);
  };

  const onLogin = () => {
    postLoginData(idValue, passwordValue).then((data) => {
      if (data.status === 400) {
        setrequestMessage("아이디와 비밀번호를 입력해주세요.");
      }
      if (data.message) {
        setrequestMessage("아이디 혹은 비밀번호가 틀렸습니다.");
      }
      if (data.token) {
        keepLogin
          ? setLoginCookie("token", data.token)
          : sessionStorage.setItem("token", data.token);
        // dispatch({
        //   type: "LOGIN",
        //   paylode: {
        //     id:
        //   }
        // })
        goToMain();
      }
    });
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <style>{"body { background-color: rgb(238, 250, 243); }"}</style>
        </Helmet>
      </HelmetProvider>
      <SignNav />
      <LoginMain>
        <div className="loginForm">
          <input
            type="text"
            placeholder="아이디"
            onKeyUp={(e) => {
              enterKey(e);
              setIdValue(e.target.value);
            }}
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="password"
              placeholder="비밀번호"
              onKeyUp={(e) => {
                enterKey(e);
                setPasswordValue(e.target.value);
              }}
              autoComplete="off"
            />
          </form>
          <div className="loginOptionBox">
            <label onClick={onKeepLogin}>
              <input type="checkbox" name="auto_login" value={keepLogin} />
              <span>로그인 상태 유지</span>
            </label>
            <div>
              <span>아이디 찾기</span>
              <span>비밀번호 재설정</span>
            </div>
          </div>
        </div>
        {requestMessage.length !== 0 && (
          <WarningUp>
            <ImWarning />
            {`${requestMessage}`}
          </WarningUp>
        )}
        <button className="button" onClick={onLogin}>
          로그인
        </button>
        <button className="signupButton" onClick={goToSignup}>
          회원가입
        </button>
      </LoginMain>
    </div>
  );
}

export default Login;
