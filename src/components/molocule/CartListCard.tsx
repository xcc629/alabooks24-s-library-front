import styled from "styled-components";

import TextButton from "../atomic/TextButton";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { CartItemsProps } from "../types/DataProps";
import { CartListProps } from "../layout/CartListLayout";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

export interface CartListCardProps extends BaseLayoutProps {
  title: CartItemsProps["title"];
  author: CartItemsProps["author"];
  price: CartItemsProps["price"];
  checked: boolean;
  index: number;
  onChecked: CartListProps["onChecked"];
  onEachCartOut: CartListProps["onEachCartOut"];
}

const CartListCardStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
  padding-bottom: 10px;

  .wrapper {
    padding: 10px 0 15px 20px;
    width: 100%;
  }
`;

const ContentWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CheckLable = styled.label`
  font-size: 24px;
  color: hsl(166, 41%, 51%);
`;
const ImageWrapper = styled.div``;
const TextWrapper = styled.div`
  * {
    padding-bottom: 10px;
  }
`;
const PriceWrapper = styled.div`
  color: hsl(166, 41%, 51%);
  font-size: 15px;
  font-weight: 600;
`;
const ButtonWrpaeer = styled.div`
  width: 100%;
  button:first-child {
    margin-right: 5px;
  }
`;

const Button = styled.button`
  border: 1px solid #a09fab;
  border-radius: 0.3rem;
  padding: 5px 10px;
  color: #7e7e87;
  background-color: transparent;
  font-size: 12px;
  font-weight: 600;

  :hover {
    background-color: #f0f0f0;
  }
`;

export default function CartListCard({
  title,
  author,
  price,
  checked,
  index,
  onChecked,
  onEachCartOut,
}: CartListCardProps) {
  return (
    <CartListCardStyled>
      <CheckLable
        onClick={() => {
          onChecked(index);
        }}
      >
        {checked ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
      </CheckLable>
      <ImageWrapper></ImageWrapper>
      <div className="wrapper">
        <ContentWrapeer>
          <TextWrapper>
            <h3>{title}</h3>
            <p>{author}</p>
          </TextWrapper>
          <PriceWrapper>{price.toLocaleString("ko-KR")}원</PriceWrapper>
        </ContentWrapeer>
        <ButtonWrpaeer>
          <TextButton content="위시리스트로 이동" themeColor={"white"} />
          <Button
            onClick={() => {
              onEachCartOut(index);
            }}
          >
            삭제
          </Button>
        </ButtonWrpaeer>
      </div>
    </CartListCardStyled>
  );
}
