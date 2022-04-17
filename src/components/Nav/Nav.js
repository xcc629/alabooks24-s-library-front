import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import style from "./Nav.module.css";

function Nav() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const onClickLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(localStorage.getItem("token"));
  }, [isLogin]);

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
        {isLogin ? (
          <UlWrapper>
            <Lis style={{ paddingRight: 15 }}>캐시충전</Lis>
            <Lis onClick={onClickLogout}>로그아웃</Lis>
          </UlWrapper>
        ) : (
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
        )}
      </div>
    </section>
  );
}

export default Nav;

const UlWrapper = styled.ul`
  display: flex;
  padding: 15px 0;
  font-size: 14px;
`;

const Lis = styled.li`
  width: max-content;
  color: rgb(117, 117, 117);
  font-weight: 500;
`;
