import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBookInfo } from "../../apis/books";
import { postCardtIn, deleteCartOut } from "../../apis/cart";

import Loading from "../../components/loading/Loading";
import Nav from "../../components/navs/TopNav";
import MainNav from "../../components/navs/MiddleNav";
import BookInfo from "./BookMainInfo";
import BookDetailInfo from "./BookDetailInfo";
import CartAlert from "../../components/carts/CartAlert";

function DetailLoading() {
  const params = useParams();
  const bookId = params.id;
  const [bookInfoObj, setbookInfoObj] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getBookInfo(bookId)
      .then((data) => {
        setbookInfoObj(data);
        return Boolean(data.id);
      })
      .then((isComplete) => isComplete && setisLoading(false));
  }, [bookId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Detail bookId={bookId} bookInfoObj={bookInfoObj} />
  );
}

function Detail(props) {
  const [cartMessage, setCartMessage] = useState("");
  const [popup, setPopup] = useState(false);

  const { bookId, bookInfoObj } = props;

  const onCartIn = () => {
    postCardtIn(bookId)
      .then((data) => {
        if (data.messgae === "카트에 담았습니다") {
          setCartMessage("카트에서 삭제되었습니다.");
        }
        if (data.message === "이미 카트에 존재하는 책입니다.") {
          onCartOut();
          setCartMessage("카트에서 삭제되었습니다.");
        } else {
          setCartMessage(data.message);
        }
      })
      .then(OnCartMessage);
  };

  const onCartOut = () => {
    deleteCartOut(bookId);
  };

  const OnCartMessage = () => {
    setPopup(true);
    setTimeout(function () {
      setPopup(false);
    }, 3000);
  };

  const OnCloseCartMessage = () => {
    setPopup(false);
  };

  return (
    <section>
      <Nav />
      <MainNav />
      {popup && (
        <CartAlert
          cartMessage={cartMessage}
          OnCloseCartMessage={OnCloseCartMessage}
        />
      )}
      <DetailMain>
        <main className="bookTotalInfoWrap">
          <BookInfo
            id={bookInfoObj.id}
            author={bookInfoObj.author}
            category={bookInfoObj.category}
            imgUrl={bookInfoObj.imgUrl}
            price={bookInfoObj.price}
            publisher={bookInfoObj.publisher}
            title={bookInfoObj.title}
            onCartIn={onCartIn}
          />
          <BookDetailInfo
            isbn={bookInfoObj.isbn}
            publicationDate={bookInfoObj.publicationDate}
          />
        </main>
        <aside style={{ width: "15%" }}>"와"</aside>
      </DetailMain>
    </section>
  );
}

export default DetailLoading;

const DetailMain = styled.section`
  display: flex;
  justify-content: center;
  padding: 5px;

  .bookTotalInfoWrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 2%;
    padding-left: 40px;
  }
`;
