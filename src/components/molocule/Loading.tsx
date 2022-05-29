import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const turnLoading = keyframes`
0%{
    transform: rotate(0deg);

}100%{
    transform: rotate(360deg);
}
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
  color: ${theme.themeColor};
  * {
    opacity: 0.8;
    animation: ${turnLoading} 1s linear infinite;
    transform-origin: 50% 50%;
    overflow: hidden;
  }
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <AiOutlineLoading3Quarters />
    </LoadingWrapper>
  );
}
