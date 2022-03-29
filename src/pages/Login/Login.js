import SignNav from "../../components/SignNav/SignNav";
import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <SignNav />
      <section className="loginMain">
        <div className="loginForm">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
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
        <button className="loginButton"> 로그인 </button>
        <button className="signupButton" onClick={goToSignup}>
          회원가입
        </button>
      </section>
    </div>
  );
}

export default Login;
