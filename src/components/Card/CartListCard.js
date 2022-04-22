import styled from "styled-components";
import SBRB from "../Buttons/SilverBorderRoundButton";

function CartListCard({ title }) {
  return (
    <Wrpper>
      <ImageWrapper></ImageWrapper>
      <TextWrapper>
        <h2>{title}</h2>
        <p></p>
      </TextWrapper>
      <SBRB content="위시리스트로 이동" />
      <SBRB content="삭제" />
    </Wrpper>
  );
}

export default CartListCard;

const Wrpper = styled.div``;
const ImageWrapper = styled.div``;
const TextWrapper = styled.div``;
