import * as React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface CommentStarInputProps extends BaseLayoutProps {
  setStarValue: React.Dispatch<React.SetStateAction<number>>;
  setStarNumberForSign: React.Dispatch<React.SetStateAction<number>>;
  setisStarClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
  isStarClicked: boolean;
}

export interface StyledStarProps {
  el: boolean;
}

const StarStyled = styled.div<StyledStarProps>`
  div {
    width: 80px;
    height: 50px;

    ${({ el }) =>
      el
        ? css`
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/f/f9/Five_Pointed_Star_Solid.svg);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
          `
        : css`
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
          `}
  }
`;

function CommentStarInput({
  setStarValue,
  setStarNumberForSign,
  setisStarClicked,
  isLogin,
  isStarClicked,
  ...rest
}: CommentStarInputProps) {
  const [starArray, setStarArray] = useState<boolean[]>(
    new Array(5).fill(false)
  );

  const resetValues = () => {
    setStarArray(new Array(5).fill(false));
    setStarNumberForSign(0);
    setStarValue(0);
  };

  const hoverStar = (index: number) => {
    if (!isStarClicked) {
      setStarArray((prev) => {
        let newArray = [...prev];
        newArray.forEach((el, idx) => {
          if (idx <= index) {
            newArray[idx] = true;
          }
        });
        return newArray;
      });
    }
    setStarNumberForSign(index + 1);
  };

  const leaveStar = () => {
    if (isStarClicked) setStarNumberForSign(0);
    if (!isStarClicked) resetValues();
  };

  const controlSaveStar = (index: number) => {
    if (isLogin) {
      if (starArray[index] && !starArray[index + 1])
        setisStarClicked((prev) => !prev);
      if (!isStarClicked && starArray) setStarValue(index + 1);
    }
  };

  return (
    <>
      {starArray.map((el, index) => (
        <StarStyled
          {...rest}
          onMouseEnter={() => hoverStar(index)}
          onMouseLeave={leaveStar}
          onClick={() => controlSaveStar(index)}
          key={`star${index}`}
          el={el}
        >
          <label htmlFor="star1">
            <div>{}</div>
          </label>
        </StarStyled>
      ))}
    </>
  );
}

export default React.memo(CommentStarInput);
