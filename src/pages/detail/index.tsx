import { useState, useLayoutEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getBookInfo, getBestSeller } from "../../apis/books";
import { getComment } from "../../apis/comment";
import Loading from "../../components/molocule/Loading";
import DetailLayout from "../../components/layout/DetailLayout";
import {
  BestSellerItemProps,
  BookInfoProps,
  CommentListProps,
} from "../../components/types/DataProps";

export default function Detail() {
  const params = useParams();
  const bookId = params.id;
  const [bestSellerList, setBestSellerList] = useState<BestSellerItemProps[]>(
    []
  );
  const [bookInfoObj, setbookInfoObj] = useState<BookInfoProps>();
  const [commentList, setCommentList] = useState<CommentListProps>();
  const [isLoading, setisLoading] = useState<boolean>(true);

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
  ) : bookId && bookInfoObj && commentList ? (
    <DetailLayout
      bookId={bookId}
      bookInfoObj={bookInfoObj}
      bestSellerList={bestSellerList}
      commentList={commentList}
    />
  ) : (
    <div>없습니다</div>
  );
}
