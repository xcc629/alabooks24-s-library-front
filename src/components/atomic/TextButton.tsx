import * as React from "react";
import styled, { css } from "styled-components";

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  themeColor: "Green" | "white";
  content: string;
}

export interface StyledProps {
  themeColor: "Green" | "white";
}

const ButtonStyled = styled.button<StyledProps>`
  margin-bottom: 10px;
  text-align: center;
  ${({ themeColor }) => {
    switch (themeColor) {
      case "Green":
        return css`
          margin-bottom: 10px;
          text-align: center;
          border: 1px solid rgb(161, 202, 179);
          border-radius: 4px;
          padding: 16px 20px;
          background-color: hsl(166, 41%, 51%);
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.04em;
          cursor: pointer;
        `;
      case "white":
        return css`
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
    }
  }}
`;

export default function TextButton({
  content,

  ...rest
}: TextButtonProps) {
  return <ButtonStyled {...rest}>{content}</ButtonStyled>;
}
