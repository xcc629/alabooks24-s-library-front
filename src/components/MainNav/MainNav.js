import { useNavigate } from "react-router-dom";
import style from "./MainNav.module.css";
import styled from "styled-components";

function MainNav() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  return (
    <section className={style.mainNavWrap}>
      <MainWrapper>
        <div className={style.logo} onClick={goToMain}>
          ALA
        </div>
        <ul className={style.inputWrap}>
          <li>
            <input type="text" className={style.mag} />
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
          <li>
            <button>{}</button>
          </li>
        </ul>
      </MainWrapper>
    </section>
  );
}

export default MainNav;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 15px 20px;
  max-width: 1150px;
  cursor: pointer;
`;
