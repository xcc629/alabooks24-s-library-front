import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { cartTotalCount } from "../../apis/cart";

export default function BookPop() {
  const { pathname } = useLocation();
  const [dataOk, setDataOk] = useState<boolean>(false);
  const [bookCount, setBookCount] = useState<number>(0);

  const getTotalCount = async () => {
    setDataOk(false);

    const data = await cartTotalCount();

    setBookCount(data.totalBooksCountInCart);
    setDataOk(true);
  };

  useEffect(() => {
    getTotalCount();
  }, [pathname]);

  return dataOk && <Pop>{bookCount}</Pop>;
}

const Pop = styled.div`
  position: absolute;
  top: -5px;
  right: 1px;
  width: max-content;
  border-radius: 0.5rem;
  padding: 2px 5px;
  background-color: #d24845;
  color: white;
  font-size: 12px;
`;
