import * as React from "react";
import styled, { keyframes } from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface SkeletonBoxProps extends BaseLayoutProps {
  width: number;
  height: number;
  borderRadius?: number;
}

const SkeletonBoxAnimation = keyframes`
  0%{
    background-color: #e4e4e4;
  }
`;

const SkeletonBoxStyled = styled.div<SkeletonBoxProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  background-color: "#EEEEEE";
  animation: ${SkeletonBoxAnimation} infinite 1s alternate;
`;

export default function SkeletonBox(props: SkeletonBoxProps) {
  return <SkeletonBoxStyled {...props} />;
}
