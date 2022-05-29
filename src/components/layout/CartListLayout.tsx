import * as React from "react";
import styled from "styled-components";
import CartListCard from "../molocule/CartListCard";
import TextButton from "../atomic/TextButton";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { CartDataProps } from "../types/DataProps";

export interface CartListProps extends BaseLayoutProps {
  cartData: CartDataProps;
  onTotalChecked: React.MouseEventHandler<HTMLLabelElement>;
  totalChecked: boolean;
  onChecked: (index: number) => void;
  checked: boolean[];
  onEachCartOut: (index: number) => void;
}

const CartListStyled = styled.div`
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

const NoListStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 90px 0 150px 0;
  color: hsl(166, 41%, 51%);
`;

export default function CartListLayout({
  cartData,
  onTotalChecked,
  totalChecked,
  onChecked,
  checked,
  onEachCartOut,
}: CartListProps) {
  return (
    <CartListStyled>
      <SelectorWrapper>
        <label onClick={onTotalChecked}>
          {totalChecked ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
          <span>전체선택</span>
        </label>
        <ButtonWrapper>
          <TextButton content="선택 위시리스트로 이동" themeColor={"white"} />
          <TextButton content="선택 삭제" themeColor={"white"} />
        </ButtonWrapper>
      </SelectorWrapper>
      {cartData.totalCount ? (
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
        ))
      ) : (
        <NoListStyled>장바구니에 책이 없습니다!</NoListStyled>
      )}
    </CartListStyled>
  );
}
