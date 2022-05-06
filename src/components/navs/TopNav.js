import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    sessionStorage.removeItem("token");
    setIsLogin(false);
  };

  useEffect(() => {
    setIsLogin(localStorage.getItem("token"));
    setIsLogin(sessionStorage.getItem("token"));
  }, [isLogin]);

  return (
    <NavWrap>
      <div className="navcontentWrap">
        <ul className="novelmenu">
          <li style={{ paddingRight: 15 }}>웹툰/만화</li>
          <li style={{ paddingRight: 15 }} className="webnovel">
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
          <ul className="usersmenu">
            <li
              className="signupButton"
              onClick={goToSignup}
              style={{ paddingRight: 15 }}
            >
              회원가입
            </li>
            <li className="loginButton" onClick={goToLogin}>
              로그인
            </li>
          </ul>
        )}
      </div>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.section`
  border-bottom: 1px solid rgb(228, 228, 228);
  cursor: pointer;

  .navcontentWrap {
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0 20px;
    max-width: 1150px;
  }

  .novelmenu,
  .usersmenu {
    display: flex;
    padding: 15px 0;
    font-size: 14px;
  }

  .novelmenu li,
  .usersmenu li {
    width: max-content;
    color: rgb(117, 117, 117);
    font-weight: 500;
  }

  .novelmenu .webnovel {
    color: black;
  }

  .signupButton:hover,
  .loginButton:hover {
    color: rgb(193, 193, 193);
    transition: 0.3s all;
  }
`;

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
