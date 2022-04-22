import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import MainNav from "../../components/MainNav/MainNav";
import CartList from "../../components/CartList/CartList";
import CartBuy from "../../components/CartBuy/CartBuy";

export default function Cartpage() {
  return (
    <>
      <Nav />
      <MainNav />
      <h1>카트</h1>
      <Wrapper>
        <CartList />
        <CartBuy />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main``;
