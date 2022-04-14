import { useNavigate } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <section className={style.navWrap}>
      <div className={style.navcontentWrap}>
        <ul className={style.novelmenu}>
          <li style={{ paddingRight: 15 }}>웹툰/만화</li>
          <li style={{ paddingRight: 15 }} className={style.webnovel}>
            웹소설
          </li>
          <li style={{ paddingRight: 15 }}>도서</li>
          <li>셀렉트</li>
        </ul>
        <ul className={style.usersmenu}>
          <li
            className={style.signupButton}
            onClick={goToSignup}
            style={{ paddingRight: 15 }}
          >
            회원가입
          </li>
          <li className={style.loginButton} onClick={goToLogin}>
            로그인
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
