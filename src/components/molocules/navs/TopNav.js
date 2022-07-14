import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getLoginCookie, removeLoginCookie } from "../../../utils/cookie";
import styled, { css } from "styled-components";

const HeaderStyled = styled.section`
  border-bottom: 1px solid rgb(228, 228, 228);
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 20px;
  max-width: 1150px;
`;

const UlWrapper = styled.ul`
  display: flex;
  padding: 15px 0;
  font-size: 14px;
`;

const LiWrapper = styled.li`
  padding-right: ${({ gapRight }) => (gapRight ? `${gapRight}px` : "0px")};
  width: max-content;
  color: ${({ canSelect }) => (canSelect ? "black" : css`rgb(117, 117, 117)`)};
  font-weight: 500;
  ${({ canSelect }) =>
    canSelect
      ? `:hover {
            color: rgb(193, 193, 193);
            transition: 0.3s all;
          }
        `
      : null};
`;

export default function TopNav() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const onClickLogout = () => {
    removeLoginCookie("token");
    sessionStorage.removeItem("token");
    setIsLogin(false);
    handleNavigate("/");
  };

  useEffect(() => {
    setIsLogin(
      Boolean(getLoginCookie("token")) ||
        Boolean(sessionStorage.getItem("token"))
    );
  }, [isLogin]);

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <UlWrapper>
          <LiWrapper gapRight={15} canSelect={false}>
            웹툰/만화
          </LiWrapper>
          <LiWrapper gapRight={15} canSelect={true}>
            웹소설
          </LiWrapper>
          <LiWrapper gapRight={15} canSelect={false}>
            도서
          </LiWrapper>
          <LiWrapper canSelect={false}>셀렉트</LiWrapper>
        </UlWrapper>
        <UlWrapper>
          <LiWrapper
            canSelect={isLogin ? false : true}
            gapRight={15}
            onClick={() => (isLogin ? null : handleNavigate("/account/signup"))}
          >
            {isLogin ? "캐시충전" : "회원가입"}
          </LiWrapper>
          <LiWrapper
            canSelect={true}
            onClick={() =>
              isLogin ? onClickLogout() : handleNavigate("/account/login")
            }
          >
            {isLogin ? "로그아웃" : "로그인"}
          </LiWrapper>
        </UlWrapper>
      </HeaderWrapper>
    </HeaderStyled>
  );
}
