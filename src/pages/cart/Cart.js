import { useState, useEffect } from "react";
import styled from "styled-components";
import BASE_URL from "../../config";
import Nav from "../../components/navs/TopNav";
import MainNav from "../../components/navs/MiddleNav";
import CartList from "../../components/carts/CartList";
import CartBuy from "../../components/carts/CartBuy";

export default function Cartpage() {
  let controller = new AbortController();
  const [cartData, setCartData] = useState({});
  const [changeLength, setChangeLength] = useState(0);
  const [totalChecked, setTotalChecked] = useState(false);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/members/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${
          localStorage.getItem("token")
            ? localStorage.getItem("token")
            : sessionStorage.getItem("token")
        }`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCartData(result);
        setChangeLength(result.cartItems.length);
      });
  }, []);

  useEffect(() => {
    cartData.cartItems &&
      fetch(`${BASE_URL}/members/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${
            localStorage.getItem("token")
              ? localStorage.getItem("token")
              : sessionStorage.getItem("token")
          }`,
        },
      })
        .then((res) => res.json())
        .then((result) => setCartData(result));
  }, [changeLength]);

  useEffect(() => {
    if (cartData.memberId) {
      onSetCheckedArray();
      onControllTotal();
    }
  }, [cartData.memberId, totalChecked]);

  const onEachCartOut = (index) => {
    fetch(`${BASE_URL}/members/cart/${cartData.cartItems[index].bookId}`, {
      signal: controller.signal,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${
          localStorage.getItem("token")
            ? localStorage.getItem("token")
            : sessionStorage.getItem("token")
        }`,
      },
    }).then(() => {
      setChangeLength(cartData.cartItems.length);
    });
  };

  const onTotalChecked = () => {
    setTotalChecked((prev) => !prev);
  };
  const onControllTotal = () => {
    setChecked(new Array(cartData.cartItems.length).fill(totalChecked));
  };
  const onSetCheckedArray = () => {
    setChecked(new Array(cartData.cartItems.length));
  };
  const onChecked = (index) => {
    console.log(index);
    setChecked((prev) => {
      const array = [...prev];
      array[index] = !array[index];
      return array;
    });
  };

  return (
    <>
      <Nav />
      <MainNav />
      <Wrapper>
        <h1>카트</h1>
        <BoxWrapper>
          <CartList
            cartData={cartData}
            onTotalChecked={onTotalChecked}
            totalChecked={totalChecked}
            onChecked={onChecked}
            checked={checked}
            onEachCartOut={onEachCartOut}
          />
          <CartBuyWrapper>
            {cartData.memberId && (
              <CartBuy cartData={cartData} checked={checked} />
            )}
          </CartBuyWrapper>
        </BoxWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 30px auto;
  h1 {
    font-size: 23px;
    padding-bottom: 20px;
  }
`;

const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: max-content;
`;

const CartBuyWrapper = styled.div`
  position: absolute;
  left: 648px;
`;
