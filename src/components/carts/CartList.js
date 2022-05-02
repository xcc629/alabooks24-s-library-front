import { useState, useEffect } from "react";
import styled from "styled-components";
import CartListCard from "./CartListCard";
import SBRB from "../buttons/SilverBorderRoundButton";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

function CartList({
  cartData,
  onTotalChecked,
  totalChecked,
  onChecked,
  checked,
  onEachCartOut,
}) {
  return (
    <Wrapper>
      {cartData.memberId && cartData.cartItems.length && (
        <SelectorWrapper>
          <label onClick={onTotalChecked}>
            {totalChecked ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
            <span>전체선택</span>
          </label>
          <ButtonWrapper>
            <SBRB content="선택 위시리스트로 이동" />
            <SBRB content="선택 삭제" />
          </ButtonWrapper>
        </SelectorWrapper>
      )}
      {cartData.memberId &&
        cartData.cartItems.length &&
        cartData.cartItems.map((data, index) => (
          <CartListCard
            key={index}
            index={index}
            title={data.title}
            author={data.author}
            price={data.price}
            checked={checked[index]}
            onChecked={onChecked}
            onEachCartOut={onEachCartOut}
          />
        ))}
    </Wrapper>
  );
}

export default CartList;

const Wrapper = styled.div`
  border: 1px solid silver;
  width: 618px;
  margin-right: 30px;
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid silver;

  font-size: 14px;
  button:first-child {
    margin-right: 10px;
  }
  span {
    margin-left: 10px;
  }
  label {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 24px;
    color: hsl(166, 41%, 51%);
  }
`;

const ButtonWrapper = styled.div``;
