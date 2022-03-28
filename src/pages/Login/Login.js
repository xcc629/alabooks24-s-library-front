import SignNav from "../../components/SignNav/SignNav";
import "../Login/Login.scss";

function Login() {
  return (
    <div>
      <SignNav />
      <main className="loginMain">
        <div className="loginForm">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <div className="loginOptionBox">
            <label>
              <input type="checkbox" />
              로그인 상태 유지
            </label>
            <span>아이디 찾기</span>
            <span>비밀번호 재설정</span>
          </div>
        </div>
        <button className="loginButton"> 로그인 </button>
        <button className="signupButton"> 회원가입 </button>
      </main>
    </div>
  );
}

export default Login;
