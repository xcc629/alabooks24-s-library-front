import { transelateCategory } from "../../utils/makeString";
import { CartButton, BookInfoContentWrap } from "./BookMainInfostyled";
import { ImCart } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

function BookInfo(prop) {
  return (
    <BookInfoContentWrap>
      <div className="bookImageAndpreviewWrap">
        <div className="bookCover">
          <img src={prop.imgUrl} alt="bookcover" />
        </div>
        <button className="previewButton">미리보기</button>
      </div>
      <div className="bookDescriptionWrap">
        <ul className="booksCategory">
          <li>소설</li>
          <li className="centerLi">
            <IoIosArrowForward />
          </li>
          <li>{transelateCategory(prop.category)}</li>
        </ul>
        <h1 className="bookTitle">{prop.title}</h1>
        <div className="authorAndPublisherWrap">
          <div className="authorWrap">
            <span>{prop.author}</span>
            <span>저</span>
          </div>
          <div className="publisherWrap">
            <span>{prop.publisher}</span>
            <span>출판</span>
          </div>
        </div>
        <div className="priceTableWrap">
          <table className="priceTable">
            <tbody>
              <tr>
                <td>구매</td>
                <td className="secondTd">판매가</td>
                <td className="thirdTd">
                  {prop.price.toLocaleString("ko-KR") + "원"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonsWrap">
          <button>"하트"</button>
          <CartButton
            onClick={() => {
              prop.onCartIn();
            }}
          >
            <ImCart />
          </CartButton>
          <button className="giftButton">"선물"</button>
          <button className="purchaseButton">소장하기</button>
        </div>
      </div>
    </BookInfoContentWrap>
  );
}

export default BookInfo;
