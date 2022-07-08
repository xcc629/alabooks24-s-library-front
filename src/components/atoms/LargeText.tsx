import * as React from "react";
import styled from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface LargeTextProps extends BaseLayoutProps {}

export default function LargeText(props: LargeTextProps) {
  return <Styled {...props} />;
}

const Styled = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: rgb(48, 53, 56);
  display: block;
  margin: 10px 0px;
  min-width: 0px;
  overflow-wrap: break-word;
`;
