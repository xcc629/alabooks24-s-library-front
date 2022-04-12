import style from "./BookDetailInfo.module.css";

function BookDetailInfo(prop) {
  return (
    <section className={style.bookDetailInfoWrap}>
      <div className={style.publishDate}>
        <div className={style.title}>출간 정보</div>
        <div className={style.value}>{prop.publicationDate} 종이책 출간</div>
      </div>
      <div className={style.ISBN}>
        <div className={style.title}>ISBN</div>
        <div className={style.value}>{prop.isbn}</div>
      </div>
    </section>
  );
}

export default BookDetailInfo;
