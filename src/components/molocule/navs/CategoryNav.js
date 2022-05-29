import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

export default function CategoryNav({ onClickCategory, click }) {
  return (
    <Wrapper>
      <CategoryWrapper>
        <Category
          onClick={() => onClickCategory("romance", 0)}
          color={`${click[0]}`}
        >
          로맨스
        </Category>
        <Category
          onClick={() => onClickCategory("romance-fantasy", 1)}
          color={`${click[1]}`}
        >
          로판
        </Category>
        <Category
          onClick={() => onClickCategory("fantasy", 2)}
          color={`${click[2]}`}
        >
          판타지
        </Category>
        <Category
          onClick={() => onClickCategory("bl", 3)}
          color={`${click[3]}`}
        >
          BL
        </Category>
      </CategoryWrapper>
      <MenuButton>
        <AiOutlineMenu
          style={{
            width: 20,
            height: 15,
            paddingTop: 1,
          }}
        />
        전체 카테고리
      </MenuButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: auto;
  border-bottom: 1px solid rgb(228, 228, 228);
  padding: 20px;
  max-width: 1150px;
  cursor: pointer;
`;

const CategoryWrapper = styled.ul`
  display: flex;
  font-size: 25px;
  font-weight: 600;
`;

const Category = styled.li`
  margin-right: 1.5rem;
  width: max-content;
  color: ${(props) =>
    props.color === "true" ? "hsl(166, 41%, 51%)" : "black"};
  :hover {
    opacity: ${(props) => props.color === "false" && "0.6"};
    transition: ${(props) => props.color === "false" && "all 0.3s;"};
  }
`;

const MenuButton = styled.button`
  border: none;
  width: max-content;
  background-color: transparent;
  font-size: 18px;
`;
