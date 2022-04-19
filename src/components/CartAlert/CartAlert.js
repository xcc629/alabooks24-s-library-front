import styled, { keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineDoubleRight,
  AiOutlineClose,
} from "react-icons/ai";

function CartAlert({ cartMessage, isCartIn, OnCloseCartMessage }) {
  return (
    <CartAlertWrapper isCartIn={isCartIn}>
      <CartMessage isCartIn={isCartIn} marginRignt={"0px"} paddingLeft={"10px"}>
        {isCartIn ? (
          <AiFillCheckCircle style={{ fontSize: 18 }} />
        ) : (
          <AiFillExclamationCircle style={{ fontSize: 18 }} />
        )}

        <span>{cartMessage}</span>
      </CartMessage>
      <GoToCart marginRignt={"160px"} paddingLeft={"5px"}>
        <span> {`카트 가기`}</span>
        <AiOutlineDoubleRight style={{ fontSize: 10 }} />
      </GoToCart>
      <Xbutton onClick={OnCloseCartMessage}>
        <AiOutlineClose style={{ marginTop: 3, fontSize: 25 }} />
      </Xbutton>
    </CartAlertWrapper>
  );
}

export default CartAlert;

const move = keyframes`
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

const CartAlertWrapper = styled.div`
  position: fixed;
  top: 8vh;
  left: 50%;
  transform: translate(-50%, 8vh);
  display: flex;
  align-items: center;
  animation: ${move} 3s ease;
  border-radius: 0.3rem;
  padding: 10px;
  background-color: black;
  font-size: 13px;
`;
const CartMessage = styled.div`
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

const GoToCart = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRignt};
  padding: 5px;
  color: white;
  font-weight: bolder;

  span {
    display: inline-block;
    padding-left: ${(props) => props.paddingLeft};
  }
`;

const Xbutton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
`;
