import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import MainNav from "../../components/MainNav/MainNav";
import BookInfo from "../../components/BookInfo/BookInfo";
import BookDetailInfo from "../../components/BookDetailInfo/BookDetailInfo";
import style from "./Detail.module.css";

function Detail() {
  const [bookInfoObj, setbookInfoObj] = useState({
    author: "수산물녀",
    category: "romance",
    id: 1,
    imgUrl: "https://img.ridicdn.net/cover/510001099/xxlarge#1",
    isbn: "9881783106321",
    price: 14000,
    publicationDate: "2010-10-12",
    publisher: "블레스",
    title: "미끼는 미끼야",
  });
  // const bookId = 25;
  // useEffect(() => {
  //   fetch(`/books/${bookId}`, { method: "GET" })
  //     .then((res) => res.json())
  //     .then((result) => setbookInfoObj(result));
  // }, []);

  console.log(bookInfoObj);
  return (
    <section>
      <Nav />
      <MainNav />
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
