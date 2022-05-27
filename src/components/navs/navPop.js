import { useState, useEffect } from "react";
import styled from "styled-components";
import BASE_URL from "../../config";

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
  const [dataOk, setDataOk] = useState(false);
  const [bookCount, setBookCount] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/members/cart/totalCount`, {
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
        setBookCount(result.totalBooksCountInCart);
        setDataOk(true);
      });
  }, []);

  return dataOk && <Pop>{bookCount}</Pop>;
}
