import * as React from "react";

import SkeletonBox from "../atoms/SkeletonBox";
import { BoxWrapper } from "../../pages/cart/index";
import styled from "styled-components";

const SkeletonBoxWrapper = styled(SkeletonBox)`
  margin-right: 30px;
`;

export default function SkeletonCartListLayout() {
  return (
    <BoxWrapper>
      <SkeletonBoxWrapper width={618} height={1000} />
      <SkeletonBox width={300} height={250.5} />
    </BoxWrapper>
  );
}
