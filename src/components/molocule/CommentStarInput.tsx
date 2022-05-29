import { useState } from "react";
import styled, { css } from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface CommentStarInputProps extends BaseLayoutProps {
  setStarValue: React.Dispatch<React.SetStateAction<number>>;
  isLogin: boolean;
}

export interface StyledStarProps {
  el: boolean;
}

const StarWrap = styled.div<StyledStarProps>`
  div {
    width: 50px;
    height: 50px;
    ${({ el }) =>
      el
        ? css`
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/f/f9/Five_Pointed_Star_Solid.svg);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          `
        : css`
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg);
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          `}
  }
`;

export default function CommentStarInput({
  setStarValue,
  isLogin,
  ...rest
}: CommentStarInputProps) {
  const [isStarClicked, setisStarClicked] = useState<boolean>(false);
  const [starArray, setStarArray] = useState<boolean[]>(
    new Array(5).fill(false)
  );

  const blockInput = () => {
    if (!isLogin) setStarArray(new Array(5).fill(false));
  };

  const hoverStar = (index: number) => {
    !isStarClicked &&
      setStarArray((prev) => {
        let newArray = [...prev];
        newArray.forEach((el, idx) => {
          if (idx <= index) {
            newArray[idx] = true;
          }
        });
        return newArray;
      });
  };

  const clearStar = () => {
    blockInput();
    !isStarClicked && setStarArray(new Array(5).fill(false));
  };

  const controlSaveStar = (index: number) => {
    if (starArray[index] && !starArray[index + 1])
      setisStarClicked((prev) => !prev);
    if (!isStarClicked && starArray) setStarValue(index + 1);
  };
  return (
    <>
      {starArray.map((el, index) => (
        <StarWrap
          onMouseEnter={() => hoverStar(index)}
          onMouseLeave={clearStar}
          onClick={() => controlSaveStar(index)}
          key={`star${index}`}
          el={el}
        >
          <label htmlFor="star1">
            <div>{}</div>
          </label>
        </StarWrap>
      ))}
    </>
  );
}
