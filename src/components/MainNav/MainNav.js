import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./MainNav.module.css";
import styled from "styled-components";
import { BsBell, BsCart3 } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";

function MainNav() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    setIsLogin(Boolean(localStorage.getItem("token")));
  }, [localStorage.getItem("token")]);

  const onClickCartButton = () => {
    isLogin ? goToCart() : goToLogin();
  };

  const goToCart = () => {
    navigate("/cart/");
  };

  const goToLogin = () => {
    navigate("/");
  };

  const goToMain = () => {
    navigate("/");
  };
  return (
    <section className={style.mainNavWrap}>
      <MainWrapper>
        <div className={style.logo} onClick={goToMain}>
          ALA
        </div>
        <ul className={style.inputWrap}>
          <li>
            <input type="text" className={style.mag} />
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
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 15px 20px;
  max-width: 1150px;
  cursor: pointer;
`;

const Buttons = styled.button`
  margin-left: 0.5em;
  border: none;
  width: max-content;
  background-color: transparent;
`;
