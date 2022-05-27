import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getLoginCookie } from "../../utils/cookie";

import BookPop from "./navPop";

import { BsBell, BsCart3 } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";

const MiddleNavStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 15px 20px;
  max-width: 1150px;
  cursor: pointer;
`;

const LogoWrapper = styled.h1`
  display: flex;
  color: hsl(166, 41%, 51%);
  font-weight: bolder;
  font-size: 35px;
  letter-spacing: 0.5;
`;

const InputWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const SearchWrapper = styled.input`
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
`;

const ButtonWrapper = styled.button`
  position: relative;
  margin-left: 0.5em;
  border: none;
  width: max-content;
  background-color: transparent;
`;

export default function MiddleNav() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    Boolean(getLoginCookie("token")) || Boolean(sessionStorage.getItem("token"))
  );

  useEffect(() => {
    setIsLogin(
      Boolean(getLoginCookie("token")) ||
        Boolean(sessionStorage.getItem("token"))
    );
  }, [
    Boolean(getLoginCookie("token")) ||
      Boolean(sessionStorage.getItem("token")),
  ]);

  const onVaildGoCart = () => {
    isLogin ? navigatePath("/cart") : alert("로그인이 필요합니다");
  };

  const navigatePath = (path) => {
    navigate(path);
  };

  return (
    <MiddleNavStyled>
      <LogoWrapper
        onClick={() => {
          navigatePath("/");
        }}
      >
        ALA
      </LogoWrapper>
      <InputWrapper>
        <li>
          <SearchWrapper type="text" />
        </li>
        <li>
          <ButtonWrapper>
            <BsBell style={{ fontSize: 25 }} />
          </ButtonWrapper>
        </li>
        <li>
          <ButtonWrapper onClick={onVaildGoCart}>
            {isLogin && <BookPop />}
            <BsCart3 style={{ fontSize: 25 }} />
          </ButtonWrapper>
        </li>
        <li>
          <ButtonWrapper>
            <ImBooks style={{ fontSize: 29 }} />
          </ButtonWrapper>
        </li>
        <li>
          <ButtonWrapper>
            <AiOutlineUser style={{ fontSize: 29 }} />
          </ButtonWrapper>
        </li>
      </InputWrapper>
    </MiddleNavStyled>
  );
}
