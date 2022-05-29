import { useState, useEffect } from "react";
import styled from "styled-components";
import CartListLayout from "../../components/layout/CartListLayout";
import CartBuy from "../../components/molocule/CartBuy";
import { deleteCartOut, getCart } from "../../apis/cart";
import { CartDataProps } from "../../components/types/DataProps";
import SkeletonCartListLayout from "../../components/layout/SkeletonCartListLayout";

const CartpageStyled = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 30px auto;
  h2 {
    font-size: 23px;
    padding-bottom: 20px;
  }
`;

export const BoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: max-content;
`;

const CartBuyWrapper = styled.div`
  position: absolute;
  left: 648px;
`;

export default function Cartpage() {
  const [isSkeletonOn, setisSkeletonOn] = useState<boolean>(true);
  const [cartData, setCartData] = useState<CartDataProps>();
  const [changeLength, setChangeLength] = useState<number>(0);
  const [totalChecked, setTotalChecked] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    getCart().then((result) => {
      setCartData(result);
      setChangeLength(result.cartItems.length);
      setisSkeletonOn(false);
    });
  }, []);

  useEffect(() => {
    cartData?.cartItems && getCart().then((result) => setCartData(result));
  }, [changeLength]);

  useEffect(() => {
    if (cartData?.memberId) {
      onSetCheckedArray();
      onControllTotal();
    }
  }, [cartData?.memberId, totalChecked]);

  const onEachCartOut = (index: number) => {
    cartData?.cartItems &&
      deleteCartOut(cartData.cartItems[index].bookId).then(() => {
        setChangeLength(cartData.cartItems.length);
      });
  };

  const onTotalChecked = () => {
    setTotalChecked((prev) => !prev);
  };
  const onControllTotal = () => {
    setChecked(new Array(cartData?.cartItems.length).fill(totalChecked));
  };
  const onSetCheckedArray = () => {
    setChecked(new Array(cartData?.cartItems.length));
  };
  const onChecked = (index: number) => {
    setChecked((prev) => {
      const array = [...prev];
      array[index] = !array[index];
      return array;
    });
  };

  return (
    <CartpageStyled>
      <h2>카트</h2>
      {isSkeletonOn ? (
        <SkeletonCartListLayout />
      ) : (
        <BoxWrapper>
          {cartData ? (
            <CartListLayout
              cartData={cartData}
              onTotalChecked={onTotalChecked}
              totalChecked={totalChecked}
              onChecked={onChecked}
              checked={checked}
              onEachCartOut={onEachCartOut}
            />
          ) : (
            <div>없음</div>
          )}

          <CartBuyWrapper>
            {cartData?.memberId && (
              <CartBuy cartData={cartData} checked={checked} />
            )}
          </CartBuyWrapper>
        </BoxWrapper>
      )}
    </CartpageStyled>
  );
}
