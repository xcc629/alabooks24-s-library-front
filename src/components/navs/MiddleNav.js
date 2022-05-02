import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsBell, BsCart3 } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import BookPop from "./navPop";

function MainNav() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    setIsLogin(
      Boolean(localStorage.getItem("token")) ||
        Boolean(sessionStorage.getItem("token"))
    );
  }, [localStorage.getItem("token"), sessionStorage.getItem("token")]);

  const onClickCartButton = () => {
    isLogin ? goToCart() : alert("로그인이 필요합니다");
  };

  const goToCart = () => {
    navigate("/cart/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToMain = () => {
    navigate("/");
  };
  return (
    <section>
      <MainWrapper>
        <BookPop isLogin={isLogin} />
        <div className="logo" onClick={goToMain}>
          ALA
        </div>
        <ul className="inputWrap">
          <li>
            <input type="text" className="mag" />
          </li>
          <li>
            <Buttons>
              <BsBell style={{ fontSize: 25 }} />
            </Buttons>
          </li>
          <li>
            <Buttons onClick={onClickCartButton}>
              <BsCart3 style={{ fontSize: 25 }} />
            </Buttons>
          </li>
          <li>
            <Buttons>
              <ImBooks style={{ fontSize: 29 }} />
            </Buttons>
          </li>
          <li>
            <Buttons>
              <AiOutlineUser style={{ fontSize: 29 }} />
            </Buttons>
          </li>
        </ul>
      </MainWrapper>
    </section>
  );
}

export default MainNav;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 15px 20px;
  max-width: 1150px;
  cursor: pointer;

  .logo,
  .inputWrap {
    display: flex;
  }

  .logo {
    color: hsl(166, 41%, 51%);
    font-weight: bolder;
    font-size: 35px;
    letter-spacing: 0.5;
  }

  .inputWrap {
    justify-content: space-around;
  }

  .mag {
    width: 250px;
    margin: 0 10px;
    padding: 10px 40px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    background-color: rgba(227, 227, 227, 0.47);
    background-image: url(https://user-images.githubusercontent.com/85507868/162778305-204270df-4271-47ae-a200-f37b6b12e662.png);
    background-position: 5% center;
    background-size: 13px;
    background-repeat: no-repeat;
    caret-color: hsl(166, 41%, 51%);
  }
`;

const Buttons = styled.button`
  margin-left: 0.5em;
  border: none;
  width: max-content;
  background-color: transparent;
`;
