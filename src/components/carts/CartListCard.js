import styled from "styled-components";
import SBRB from "../button/SilverBorderRoundButton";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

function CartListCard({
  title,
  author,
  price,
  checked,
  index,
  onChecked,
  onEachCartOut,
}) {
  return (
    <Wrpper>
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
            <h2>{title}</h2>
            <p>{author}</p>
          </TextWrapper>
          <PriceWrapper>{price.toLocaleString("ko-KR")}원</PriceWrapper>
        </ContentWrapeer>
        <ButtonWrpaeer>
          <SBRB content="위시리스트로 이동" />
          <Button
            onClick={() => {
              onEachCartOut(index);
            }}
          >
            삭제
          </Button>
        </ButtonWrpaeer>
      </div>
    </Wrpper>
  );
}

export default CartListCard;

const Wrpper = styled.div`
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
