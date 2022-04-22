import styled from "styled-components";
import CartListCard from "../Card/CartListCard";
import SBRB from "../Buttons/SilverBorderRoundButton";

function CartList() {
  return (
    <Wrapper>
      {true && (
        <SelectorWrapper>
          <Checkbox type="checkbox" />
          <ButtonWrapper>
            <SBRB content="선택 위시리스트로 이동" />
            <SBRB content="선택 삭제" />
          </ButtonWrapper>
        </SelectorWrapper>
      )}
    </Wrapper>
  );
}

export default CartList;

const Wrapper = styled.div`
  border: 1px solid silver;
`;

const SelectorWrapper = styled.div``;

const Checkbox = styled.input``;

const ButtonWrapper = styled.div``;
