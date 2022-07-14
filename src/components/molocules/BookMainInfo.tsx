import * as React from "react";

import styled from "styled-components";
import { transelateCategory } from "../../utils/makeString";
import { ImCart } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { BookInfoProps } from "../types/DataProps";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface BookInfoDataProps extends BaseLayoutProps {
  id: BookInfoProps["id"];
  author: BookInfoProps["author"];
  category: BookInfoProps["category"];
  imgUrl: BookInfoProps["imgUrl"];
  price: BookInfoProps["price"];
  publisher: BookInfoProps["publisher"];
  title: BookInfoProps["title"];
  onCartIn: () => void;
  isInMyCart: boolean;
}

export interface buttonStyled {
  isInMyCart: boolean;
}

function BookInfo({
  id,
  author,
  category,
  imgUrl,
  price,
  publisher,
  title,
  onCartIn,
  isInMyCart,
  ...rest
}: BookInfoDataProps) {
  return (
    <BookInfoContentWrap {...rest}>
      <div className="bookImageAndpreviewWrap">
        <div className="bookCover">
          <img src={imgUrl} alt="bookcover" />
        </div>
        <button className="previewButton">미리보기</button>
      </div>
      <div className="bookDescriptionWrap">
        <ul className="booksCategory">
          <li>소설</li>
          <li className="centerLi">
            <IoIosArrowForward />
          </li>
          <li>{transelateCategory(category)}</li>
        </ul>
        <h1 className="bookTitle">{title}</h1>
        <div className="authorAndPublisherWrap">
          <div className="authorWrap">
            <span>{author}</span>
            <span>저</span>
          </div>
          <div className="publisherWrap">
            <span>{publisher}</span>
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
                  {price.toLocaleString("ko-KR") + "원"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttonsWrap">
          <CartButton
            onClick={() => {
              onCartIn();
            }}
            isInMyCart={isInMyCart}
          >
            <ImCart />
          </CartButton>
          <button className="purchaseButton">소장하기</button>
        </div>
      </div>
    </BookInfoContentWrap>
  );
}

export default BookInfo;

const BookInfoContentWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  max-width: 1134px;

  .bookImageAndpreviewWrap {
    display: flex;
    flex-direction: column;
    padding-right: 35px;
  }

  .bookCover {
    max-width: 210px;
    min-width: 200px;
    object-fit: cover;
  }

  .bookCover img {
    display: inline-block;
    width: 100%;
  }
  .previewButton {
    margin: 15px auto 60px auto;
    border: 0.1rem solid hsl(166, 41%, 51%);
    border-radius: 0.3rem;
    padding: 10px 30px 10px 40px;
    background-color: white;
    background-image: url("https://user-images.githubusercontent.com/85507868/163014536-462b1c5c-5a2f-4010-b71f-ffb95fadc216.png");
    background-position: 23% center;
    background-size: 0.8rem;
    background-repeat: no-repeat;
    color: hsl(166, 41%, 51%);
  }

  .previewButton:hover {
    background-color: rgba(238, 250, 243, 0.881);
  }

  .booksCategory {
    display: flex;
    margin-bottom: 1rem;
    font-size: 12px;
  }

  .booksCategory .centerLi {
    padding: 0 0.1rem;
  }

  .bookTitle {
    font-size: 30px;
  }

  .authorAndPublisherWrap {
    margin: 2em 0;
    font-size: 13px;
  }

  .authorWrap {
    margin-bottom: 0.5rem;
    color: gray;
  }

  .publisherWrap {
    margin-bottom: 5rem;
    color: gray;
  }

  .authorWrap span:first-child,
  .publisherWrap span:first-child {
    margin-right: 5px;
    font-weight: 600;
    color: rgb(116, 116, 116);
  }
  .priceTable {
    width: max-content;
  }

  .priceTable td {
    border-top: 1px solid rgba(192, 192, 192, 0.35);
    border-bottom: 1px solid rgba(192, 192, 192, 0.35);
  }

  .priceTable td:first-child {
    border-right: 1px solid rgba(192, 192, 192, 0.35);
    padding: 25px 80px;
    background-color: rgb(241, 248, 244);
    font-size: 13px;
  }

  .secondTd {
    padding: 20px 110px 20px 10px;
    font-size: 13px;
    color: rgb(116, 116, 116);
  }

  .thirdTd {
    padding: 20px 10px 20px 110px;
    font-size: 13px;
    font-weight: 600;
    color: hsl(166, 41%, 51%);
  }

  .buttonsWrap {
    display: flex;
    justify-content: end;
    margin-top: 1rem;
  }

  .purchaseButton {
    border: 1px solid hsla(166, 56%, 39%, 0.856);
    border-radius: 0.3em;
    padding: 15px 1.8rem;
    background-color: hsl(166, 41%, 51%);
    font-size: 15px;
    color: white;
  }

  .purchaseButton:hover {
    background-color: hsla(166, 49%, 43%, 0.934);
    transition: all 0.2s;
  }
`;

const CartButton = styled.button`
  margin: 0 0.4em;
  border: 0.1rem solid rgba(192, 192, 192, 0.35);
  border-radius: 0.2rem;
  padding: 2px 16px 0 14px;
  background-color: transparent;
  color: ${({ isInMyCart }: buttonStyled) => (isInMyCart ? "#FA8576" : "gray")};
  font-size: 1.1rem;
`;
