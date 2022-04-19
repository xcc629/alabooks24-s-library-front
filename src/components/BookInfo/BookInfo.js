import styled from "styled-components";
import style from "./BookInfo.module.css";
import { ImCart } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

function BookInfo(prop) {
  return (
    <>
      <div className={style.BookInfoContentWrap}>
        <div className={style.bookImageAndpreviewWrap}>
          <div className={style.bookCover}>
            <img src={prop.imgUrl} alt="bookcover" />
          </div>
          <button className={style.previewButton}>미리보기</button>
        </div>
        <div className={style.bookDescriptionWrap}>
          <ul className={style.booksCategory}>
            <li>소설</li>
            <li className={style.centerLi}>
              <IoIosArrowForward />
            </li>
            <li>{prop.category}</li>
          </ul>
          <h1 className={style.bookTitle}>{prop.title}</h1>
          <div className={style.authorAndPublisherWrap}>
            <div className={style.authorWrap}>
              <span>{prop.author}</span>
              <span>저</span>
            </div>
            <div className={style.publisherWrap}>
              <span>{prop.publisher}</span>
              <span>출판</span>
            </div>
          </div>
          <div className={style.priceTableWrap}>
            <table className={style.priceTable}>
              <tbody>
                <tr>
                  <td>구매</td>
                  <td className={style.secondTd}>판매가</td>
                  <td className={style.thirdTd}>
                    {prop.price.toLocaleString("ko-KR") + "원"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.buttonsWrap}>
            <button>"하트"</button>
            <CartButton
              onClick={() => {
                const isClicked = prop.onCartIn();
                console.log("얍!", isClicked);
              }}
            >
              <ImCart />
            </CartButton>
            <button className={style.giftButton}>"선물"</button>
            <button className={style.purchaseButton}>소장하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookInfo;

const CartButton = styled.button`
  margin: 0 0.4em;
  border: 0.1rem solid rgba(192, 192, 192, 0.35);
  border-radius: 0.2rem;
  padding: 2px 16px 0 14px;
  background-color: transparent;
  color: gray;
  font-size: 1.1rem;
`;
