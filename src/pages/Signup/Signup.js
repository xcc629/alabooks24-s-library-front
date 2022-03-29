import SignNav from "../../components/SignNav/SignNav";

function Signup() {
  return (
    <div>
      <SignNav />
      <section>
        <div className="signupID">
          <input type="text" placeholder="아이디" />
        </div>
        <div className="signupPassword">
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
        </div>
        <div className="signupEmail">
          <input type="text" placeholder="이메일 주소" />
        </div>
        <div className="signupAgreedWap"></div>
      </section>
    </div>
  );
}

export default Signup;
