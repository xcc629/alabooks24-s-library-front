import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getBookInfo } from "../../apis/books";
import { postCardtIn, deleteCartOut } from "../../apis/cart";

import Nav from "../../components/navs/TopNav";
import MainNav from "../../components/navs/MiddleNav";
import BookInfo from "./BookInfo";
import BookDetailInfo from "./BookDetailInfo";
import CartAlert from "../../components/carts/CartAlert";

import style from "./Detail.module.css";

function Detail() {
  const params = useParams();
  const [bookInfoObj, setbookInfoObj] = useState(initialObj);
  const [cartMessage, setCartMessage] = useState("");
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    getBookInfo(params.id).then((data) => setbookInfoObj(data));
  }, [params.id]);

  const onCartIn = () => {
    postCardtIn(params.id)
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
    deleteCartOut(params.id);
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
      <section className={style.detailMain}>
        <main className={style.bookTotalInfoWrap}>
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
      </section>
    </section>
  );
}

export default Detail;

const initialObj = {
  author: "수산물녀",
  category: "romance",
  id: 1,
  imgUrl: "https://img.ridicdn.net/cover/510001099/xxlarge#1",
  isbn: "9881783106321",
  price: 14000,
  publicationDate: "2010-10-12",
  publisher: "블레스",
  title: "미끼는 미끼야",
};
