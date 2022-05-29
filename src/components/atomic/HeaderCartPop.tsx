import { useState, useEffect } from "react";
import styled from "styled-components";
import { cartTotalCount } from "../../apis/cart";

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

export default function BookPop() {
  const [bookCount, setBookCount] = useState<number>(0);

  useEffect(() => {
    cartTotalCount()
      .then((res) => res.json())
      .then((result) => {
        setBookCount(result.totalBooksCountInCart);
      });
  }, []);

  return <Pop>{bookCount}</Pop>;
}
