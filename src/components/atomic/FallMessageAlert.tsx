import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineDoubleRight,
  AiOutlineClose,
} from "react-icons/ai";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import useStores from "../../stores/useStore";

export interface FallMessageAlertProps extends BaseLayoutProps {
  icon?: "ok" | "no";
  color: "Green" | "Red";
  message: string;
  navigateMessage?: string;
  navigateAddress?: string;
}

export interface StyledProps {
  open: Boolean;
}

function FallMessageAlert() {
  const { modalStore } = useStores();
  const {
    isOpen,
    modalMessage,
    color,
    modalIcon,
    navigateModalAddress,
    navigatemodalMessage,
  } = modalStore;

  const [open, setOpen] = useState(isOpen);
  const navigate = useNavigate();

  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        modalStore.closeModal();
      }, 3000);
  }, [isOpen]);

  return isOpen ? (
    <FallMessageAlertStyled open={open}>
      <FallMessageAlertWrapper color={color}>
        {modalIcon === "ok" ? (
          <AiFillCheckCircle />
        ) : (
          <AiFillExclamationCircle />
        )}
        <span>{modalMessage}</span>
        {navigateModalAddress && navigatemodalMessage && (
          <NavigateButtonWrapper
            onClick={() => {
              navigate(navigateModalAddress);
            }}
          >
            <span>{navigatemodalMessage}</span>
            <AiOutlineDoubleRight style={{ fontSize: 10 }} />
          </NavigateButtonWrapper>
        )}
      </FallMessageAlertWrapper>

      <CloseButtonWrapper
        onClick={() => {
          setOpen(false);
        }}
      >
        <AiOutlineClose style={{ marginTop: 3, fontSize: 25 }} />
      </CloseButtonWrapper>
    </FallMessageAlertStyled>
  ) : (
    <div></div>
  );
}

export default observer(FallMessageAlert);

const FallDownAnimation = keyframes`
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

const FallMessageAlertStyled = styled.div<StyledProps>`
  position: fixed;
  top: 8vh;
  left: 50%;
  transform: translate(-50%, 8vh);

  display: ${({ open }) => (open ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  padding: 10px;

  width: 420px;
  background-color: black;
  font-size: 13px;

  -o-animation: ${FallDownAnimation} 3s ease;
  -moz-animation: ${FallDownAnimation} 3s ease;
  -webkit-animation: ${FallDownAnimation} 3s ease;
  animation: ${FallDownAnimation} 3s ease;
`;

const FallMessageAlertWrapper = styled.div<
  Pick<FallMessageAlertProps, "color">
>`
  display: flex;
  align-items: center;
  padding: 5px;
  color: ${({ color }) => (color === "Green" ? "#5ABF0D" : "#FA8576")};
  font-size: 18px;

  span {
    display: inline-block;
    padding-left: 5px;
    font-size: 13px;
  }
`;

const NavigateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: white;
  font-weight: bolder;
  cursor: pointer;

  span {
    display: inline-block;
  }
`;

const CloseButtonWrapper = styled.div`
  border: none;
  background-color: transparent;
  color: gray;
`;
