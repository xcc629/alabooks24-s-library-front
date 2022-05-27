import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBookInfo, getBestSeller } from "../../apis/books";
import { getComment } from "../../apis/comment";
import { postCartIn, deleteCartOut } from "../../apis/cart";

import Loading from "../../components/loading/Loading";
import Nav from "../../components/navs/TopNav";
import MainNav from "../../components/navs/MiddleNav";
import BookInfo from "./BookMainInfo";
import BookDetailInfo from "./BookDetailInfo";
import BestSeller from "./BestSeller";
import Comment from "../../components/comment/Comment";
import CartAlert from "../../components/carts/CartAlert";

function DetailLoading() {
  const params = useParams();
  const bookId = params.id;
  const [bestSellerList, setBestSellerList] = useState([]);
  const [bookInfoObj, setbookInfoObj] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useLayoutEffect(() => {
    getBestSeller().then((data) => setBestSellerList(data));
    getComment(bookId).then((data) => setCommentList(data));
    getBookInfo(bookId)
      .then((data) => {
        setbookInfoObj(data);
        return Boolean(data.id);
      })
      .then((isComplete) => {
        isComplete && setisLoading(false);
        return isComplete;
      })
      .then((isComplete) => {
        isComplete && document.documentElement.scrollTo(0, 0);
        if (isLoading) {
          window.history.scrollRestoration = "manual";
        }
        window.history.scrollRestoration = "auto";
      });
  }, [bookId]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Detail
        bookId={bookId}
        bookInfoObj={bookInfoObj}
        bestSellerList={bestSellerList}
        commentList={commentList}
      />
    </>
  );
}

function Detail(props) {
  const [cartMessage, setCartMessage] = useState("");
  const [popup, setPopup] = useState(false);

  const { bookId, bookInfoObj, bestSellerList, commentList } = props;

  const onCartIn = () => {
    postCartIn(bookId)
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
          <Comment commentList={commentList} />
        </main>
        <aside style={{ width: "15%" }}>
          <BestSeller bestSellerList={bestSellerList} />
        </aside>
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
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 2%;
    padding-left: 40px;
  }
`;
