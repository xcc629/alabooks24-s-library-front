import styled from "styled-components";
import { postCartIn, deleteCartOut } from "../../apis/cart";
import BookInfo from "../molocule/BookMainInfo";
import BookDetailInfo from "../molocule/BookDetailInfo";
import BestSeller from "../molocule/BestSeller";
import CommentLayout from "../../components/layout/CommentLayout";

import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { BestSellerItemProps, BookInfoProps } from "../types/DataProps";
import UseStores from "../../stores/useStore";

export interface DetailLayoutProps extends BaseLayoutProps {
  bookId: string;
  bookInfoObj: BookInfoProps;
  bestSellerList: BestSellerItemProps[];
  isInMyCart: boolean;
  setIsInMyCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DetailLayout({
  bookId,
  bookInfoObj,
  bestSellerList,
  isInMyCart,
  setIsInMyCart,
}: DetailLayoutProps) {
  const { modalStore } = UseStores();

  const onCartIn = async () => {
    try {
      const data = await postCartIn(bookId);

      if (!data.message) throw new Error("NO MESSAGE");

      if (data.message === "카트에 담았습니다.") {
        modalStore.openModal(data.message, "pass", "카트보기", "/cart");
        setIsInMyCart(true);
      }

      if (data.message === "이미 카트에 존재하는 책입니다.") {
        onCartOut();
        modalStore.openModal("카트에서 삭제되었습니다.", "pass");
        setIsInMyCart(false);
      }

      if (data.message === "로그인이 필요합니다.")
        modalStore.openModal(
          data.message,
          "dined",
          "로그인으로",
          "/account/login"
        );
    } catch (err) {
      console.log(err);
    }
  };

  const onCartOut = () => {
    deleteCartOut(bookId);
  };

  return (
    <section>
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
            isInMyCart={isInMyCart}
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
