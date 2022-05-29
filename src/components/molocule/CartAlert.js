import React, { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineDoubleRight,
  AiOutlineClose,
} from "react-icons/ai";

const CartAlertAnimation = keyframes`
0%{
    transform: translate(-50%, 0vh);
    opacity: 0;
}
8%{
    transform: translate(-50%, 8vh);
    opacity: 0.9;
}
9%{
    transform: translate(-50%, 8vh);
    opacity: 1;
}
90%{
    transform: translate(-50%, 8vh);
    opacity: 1;
}
100%{
    transform: translate(-50%, -1vh);
    opacity: 0;
}
`;

const CartAlertStyled = styled.div`
  position: fixed;
  top: 8vh;
  left: 50%;
  transform: translate(-50%, 8vh);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${CartAlertAnimation} 3s ease;
  border-radius: 0.3rem;
  padding: 10px;
  width: max-content;
  background-color: black;
  font-size: 13px;
`;

const CartMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRignt};
  padding: 5px;
  color: ${(props) => (props.isCartIn ? "#2FAD6F" : "#FA8576")};

  span {
    display: inline-block;
    padding-left: ${(props) => props.paddingLeft};
  }
`;

const NavigateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRignt};
  padding: 5px;
  color: white;
  font-weight: bolder;
  cursor: pointer;

  span {
    display: inline-block;
    padding-left: ${(props) => props.paddingLeft};
  }
`;

const CloseButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
`;

export default function CartAlert({ cartMessage, OnCloseCartMessage }) {
  const navigate = useNavigate();
  let canGoCart = true;
  if (cartMessage === "로그인이 필요합니다.") {
    canGoCart = false;
  }

  return (
    <CartAlertStyled isCartIn={canGoCart}>
      <CartMessageWrapper
        isCartIn={canGoCart}
        marginRignt={"10px"}
        paddingLeft={"10px"}
      >
        {canGoCart ? (
          <AiFillCheckCircle style={{ fontSize: 18 }} />
        ) : (
          <AiFillExclamationCircle style={{ fontSize: 18 }} />
        )}
        <span>{cartMessage}</span>
      </CartMessageWrapper>
      {cartMessage === "카트에 담았습니다." && (
        <NavigateButtonWrapper
          marginRignt={"160px"}
          paddingLeft={"5px"}
          onClick={() => {
            navigate("/cart/");
          }}
        >
          <span> 카트 가기</span>
          <AiOutlineDoubleRight style={{ fontSize: 10 }} />
        </NavigateButtonWrapper>
      )}
      {!canGoCart && (
        <NavigateButtonWrapper
          marginRignt={"160px"}
          paddingLeft={"5px"}
          onClick={() => {
            navigate("/login");
          }}
        >
          <span>로그인으로 이동</span>
          <AiOutlineDoubleRight style={{ fontSize: 10 }} />
        </NavigateButtonWrapper>
      )}

      <CloseButtonWrapper onClick={OnCloseCartMessage}>
        <AiOutlineClose style={{ marginTop: 3, fontSize: 25 }} />
      </CloseButtonWrapper>
    </CartAlertStyled>
  );
}
