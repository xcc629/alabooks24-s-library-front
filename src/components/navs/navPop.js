import { useState, useEffect } from "react";
import styled from "styled-components";
import BASE_URL from "../../config";

function BookPop() {
  const [isLogin, setIsLogin] = useState(false);
  const [bookCount, setBookCount] = useState();

  useEffect(() => {
    setIsLogin(
      Boolean(sessionStorage.getItem("token")) ||
        Boolean(localStorage.getItem("token"))
    );
    console.log(
      Boolean(sessionStorage.getItem("token")) ||
        Boolean(localStorage.getItem("token"))
    );
  });

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
      .then((result) => setBookCount(result.totalBooksCountInCart));
  }, []);

  return <Pop isLogin={isLogin}>{bookCount}</Pop>;
}

export default BookPop;

const Pop = styled.div`
  display: ${(props) => (props.isLogin ? "block" : "none")};
  position: absolute;
  top: 10px;
  right: 115px;
  border-radius: 0.5rem;
  padding: 2px 5px;
  background-color: #d24845;
  color: white;
  font-size: 12px;
`;
