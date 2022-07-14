import * as React from "react";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import TextButton from "../atoms/TextButton";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { CartDataProps } from "../types/DataProps";

export interface CartBuyProps extends BaseLayoutProps {
  cartData: CartDataProps;
  checked: boolean[];
}

export default function CartBuy({ cartData, checked, ...rest }: CartBuyProps) {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const sumTotal = () => {
    setTotalBooks(() => {
      let count = 0;
      checked.forEach((element) => {
        element && count++;
      });
      return count;
    });

    setTotalPrice(() => {
      let sum = 0;
      checked.forEach((el, idx) => {
        if (el) {
          sum += cartData.cartItems[idx].price;
        }
      });
      return sum;
    });
  };

  useEffect(() => {
    sumTotal();
  }, [checked]);

  return (
    <CartBuyStyled {...rest}>
      <CartBuyWrapper>
        <TotalBooksWrapper>
          <AiFillCheckCircle />
          {totalBooks}권을 선택하셨습니다.
        </TotalBooksWrapper>
        <ContentWrapper>
          <p>총 상품 금액</p>
          <p>{totalPrice.toLocaleString("ko-KR")}원</p>
        </ContentWrapper>
        <ContentWrapper>
          <p>할인 금액</p>
          <p>{0}원</p>
        </ContentWrapper>
        <ResultWrapper>
          <p>합계</p>
          <p>{totalPrice.toLocaleString("ko-KR")}원</p>
        </ResultWrapper>
      </CartBuyWrapper>

      <TextButtonWrapper content="선택 구매하기" themeColor={"Green"} />
    </CartBuyStyled>
  );
}

const CartBuyStyled = styled.div`
  position: fixed;
  max-width: 1024px;
`;

const CartBuyWrapper = styled.div`
  border: 1px solid hsl(166, 41%, 51%);
  align-items: center;
  margin-bottom: 10px;
  padding-top: 20px;
  width: 300px;
  height: max-content;
  background-color: white;
`;

const TotalBooksWrapper = styled.div`
  display: flex;
  padding: 5px 20px 10px 20px;
  width: 100%;
  color: hsl(166, 41%, 51%);
  font-size: 13px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  p:not(:last-child) {
    color: #7e7e87;
  }
`;

const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px;
  background-color: rgb(238, 250, 243);
  p:not(:last-child) {
    color: #7e7e87;
    font-weight: 600;
    font-size: 14px;
  }

  p:last-child {
    color: hsl(166, 41%, 51%);
    font-size: 18px;
    font-weight: 600;
  }
`;

const TextButtonWrapper = styled(TextButton)`
  width: 100%;
`;
