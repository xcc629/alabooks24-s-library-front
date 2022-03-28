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
        </div>
        <button> 로그인 </button>
        <button> 회원가입 </button>
      </main>
    </div>
  );
}

export default Login;
