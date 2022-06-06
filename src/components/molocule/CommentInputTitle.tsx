import * as React from "react";
import styled, { css } from "styled-components";
import { starRateSignString } from "../../utils/makeString";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface CommentInputTitleProps extends BaseLayoutProps {
  starValue: number;
  starNumberForSign: number;
  isStarClicked: boolean;
}

export interface YesDecideStarStyledProps {
  isSameValue: boolean;
}

export interface CommentInputTitleStyledProps {
  isSameValue: boolean;
  doRating: boolean;
  isStarClicked: boolean;
}

function styling({
  doRating,
  isSameValue,
  isStarClicked,
}: CommentInputTitleStyledProps) {
  let style: ReturnType<typeof css>;
  const hoverCommonStyle = css`
    position: relative;
    width: 120px;
    padding: 0px;
    color: white;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 5px;
    font-size: 15px;
    :after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 10px 10px 0;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -10px;
      left: 50px;
    }
  `;

  if (doRating) {
    if (isSameValue && isStarClicked) {
      style = css`
        ${hoverCommonStyle}
        background: #999;
        :after {
          border-color: #999 transparent;
        }
      `;
    } else {
      style = css`
        ${hoverCommonStyle}
        background: hsl(166, 41%, 51%);
        :after {
          border-color: hsl(166, 41%, 51%) transparent;
        }
      `;
    }
  } else {
    style = css`
      font-size: 18px;
      color: #999;
    `;
  }

  return style;
}

const CommentInputTitleStyled = styled.div<CommentInputTitleStyledProps>`
  ${styling}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 40px auto 10px auto;
  font-weight: 600;
  letter-spacing: -0.03em;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #999;
`;

const StarValueWrapper = styled.div`
  padding: 0 2px 5px 5px;
  font-size: 28px;
  color: hsl(166, 41%, 51%);
`;

function CommentInputTitle({
  starValue,
  starNumberForSign,
  isStarClicked,
  ...rest
}: CommentInputTitleProps) {
  return (
    <CommentInputTitleStyled
      {...rest}
      doRating={starNumberForSign > 0}
      isStarClicked={isStarClicked}
      isSameValue={starNumberForSign === starValue}
    >
      {isStarClicked ? (
        starNumberForSign ? (
          starNumberForSign === starValue ? (
            "취소하기"
          ) : (
            starRateSignString(starNumberForSign)
          )
        ) : (
          <TextWrapper>
            내가 남긴 별점 <StarValueWrapper>{starValue}</StarValueWrapper>점
          </TextWrapper>
        )
      ) : (
        starRateSignString(starNumberForSign)
      )}
    </CommentInputTitleStyled>
  );
}

export default React.memo(CommentInputTitle);
