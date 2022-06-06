import { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookInfo, getBestSeller } from "../../apis/books";

import Loading from "../../components/molocule/Loading";
import DetailLayout from "../../components/layout/DetailLayout";
import {
  BestSellerItemProps,
  BookInfoProps,
} from "../../components/types/DataProps";

export default function Detail() {
  const params = useParams();
  const bookId = params.id;
  const [bestSellerList, setBestSellerList] = useState<BestSellerItemProps[]>(
    []
  );
  const [bookInfoObj, setbookInfoObj] = useState<BookInfoProps>();

  const [isLoading, setisLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    getBestSeller().then((data) => setBestSellerList(data));

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
  ) : bookId && bookInfoObj ? (
    <DetailLayout
      bookId={bookId}
      bookInfoObj={bookInfoObj}
      bestSellerList={bestSellerList}
    />
  ) : (
    <div>없습니다</div>
  );
}
