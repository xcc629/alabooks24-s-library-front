import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

function SignNav() {
  return (
    <LogoBox>
      <Link to="/" className="logo">
        ALABOOKS
      </Link>
    </LogoBox>
  );
}

export default SignNav;

const LogoBox = styled.nav`
  .logo {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(184, 204, 192);
    padding: 10px;
    color: ${theme.themeColor};
    text-decoration: none;
    font-size: 21px;
    font-family: "Sunflower", sans-serif;
  }
`;
