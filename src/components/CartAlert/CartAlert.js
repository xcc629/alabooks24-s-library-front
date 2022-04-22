import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineDoubleRight,
  AiOutlineClose,
} from "react-icons/ai";

function CartAlert({ cartMessage, OnCloseCartMessage }) {
  const navigate = useNavigate();
  let isCartOkay = true;
  if (cartMessage === "로그인이 필요합니다.") {
    isCartOkay = false;
  }

  const goToCart = () => {
    navigate("/cart/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <CartAlertWrapper isCartIn={isCartOkay}>
      <CartMessage
        isCartIn={isCartOkay}
        marginRignt={"10px"}
        paddingLeft={"10px"}
      >
        {isCartOkay ? (
          <AiFillCheckCircle style={{ fontSize: 18 }} />
        ) : (
          <AiFillExclamationCircle style={{ fontSize: 18 }} />
        )}

        <span>{cartMessage}</span>
      </CartMessage>
      {cartMessage === "카트에 담았습니다." && (
        <GoTo marginRignt={"160px"} paddingLeft={"5px"} onClick={goToCart}>
          <span> 카트 가기</span>
          <AiOutlineDoubleRight style={{ fontSize: 10 }} />
        </GoTo>
      )}
      {!isCartOkay && (
        <GoTo marginRignt={"160px"} paddingLeft={"5px"} onClick={goToLogin}>
          <span>로그인으로 이동</span>
          <AiOutlineDoubleRight style={{ fontSize: 10 }} />
        </GoTo>
      )}

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
  justify-content: space-between;
  align-items: center;
  animation: ${move} 3s ease;
  border-radius: 0.3rem;
  padding: 10px;
  width: max-content;
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

const GoTo = styled.div`
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

const Xbutton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
`;
