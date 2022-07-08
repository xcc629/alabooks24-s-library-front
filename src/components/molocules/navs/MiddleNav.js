import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLoginCookie } from "../../../utils/cookie";
import BookPop from "../../atoms/Badge";
import { BsCart3 } from "react-icons/bs";
import UseStores from "../../../stores/useStore";

export default function MiddleNav() {
  const { modalStore } = UseStores();
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
    isLogin
      ? navigatePath("/cart")
      : modalStore.openModal(
          "로그인이 필요합니다.",
          "diend",
          "로그인 하기",
          "account/login"
        );
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
          <ButtonWrapper onClick={onVaildGoCart}>
            {isLogin && <BookPop />}
            <BsCart3 style={{ fontSize: 25 }} />
          </ButtonWrapper>
        </li>
      </InputWrapper>
    </MiddleNavStyled>
  );
}

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
