import { useState } from "react";
import styled from "styled-components";
import { postCartIn, deleteCartOut } from "../../apis/cart";
import BookInfo from "../molocule/BookMainInfo";
import BookDetailInfo from "../molocule/BookDetailInfo";
import BestSeller from "../molocule/BestSeller";
import CommentLayout from "../../components/layout/CommentLayout";
import CartAlert from "../../components/molocule/CartAlert";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { BestSellerItemProps, BookInfoProps } from "../types/DataProps";

export interface DetailLayoutProps extends BaseLayoutProps {
  bookId: string;
  bookInfoObj: BookInfoProps;
  bestSellerList: BestSellerItemProps[];
}

export default function DetailLayout({
  bookId,
  bookInfoObj,
  bestSellerList,
}: DetailLayoutProps) {
  const [cartMessage, setCartMessage] = useState<string>("");
  const [popup, setPopup] = useState<Boolean>(false);

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
          <CommentLayout bookId={bookInfoObj.id} />
        </main>
        <aside style={{ width: "15%" }}>
          <BestSeller bestSellerList={bestSellerList} />
        </aside>
      </DetailMain>
    </section>
  );
}

const DetailMain = styled.div`
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
