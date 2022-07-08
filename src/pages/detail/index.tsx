import { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookInfo, getBestSeller } from "../../apis/books";

import Loading from "../../components/atoms/Loading";
import DetailLayout from "../../components/templates/DetailLayout";
import {
  BestSellerItemProps,
  BookInfoProps,
} from "../../components/types/DataProps";
import { checkIsInMyCart } from "../../apis/cart";
import { getLoginCookie } from "../../utils/cookie";

export default function Detail() {
  const params = useParams();
  const bookId = params.id;
  const [bestSellerList, setBestSellerList] = useState<BestSellerItemProps[]>(
    []
  );
  const [bookInfoObj, setbookInfoObj] = useState<BookInfoProps>();
  const [isInMyCart, setIsInMyCart] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(true);

  const getBestsellerdata = async () => {
    const data = await getBestSeller();
    setBestSellerList(data);
    return true;
  };

  const checkCart = async () => {
    if (Boolean(getLoginCookie("token") || sessionStorage.getItem("token"))) {
      const result = await checkIsInMyCart(bookId);
      setIsInMyCart(result.exist);
    }
    return true;
  };

  const getBookInfodata = async () => {
    const data = await getBookInfo(bookId);
    setbookInfoObj(data);

    return true;
  };

  const controlLoading = async () => {
    const result =
      (await getBestsellerdata()) &&
      (await checkCart()) &&
      (await getBookInfodata());

    if (result) {
      setisLoading(false);

      document.documentElement.scrollTo(0, 0);
      if (isLoading) {
        window.history.scrollRestoration = "manual";
      }
      window.history.scrollRestoration = "auto";
    }
  };

  useLayoutEffect(() => {
    controlLoading();
  }, [bookId]);

  return isLoading ? (
    <Loading />
  ) : bookId && bookInfoObj ? (
    <DetailLayout
      bookId={bookId}
      bookInfoObj={bookInfoObj}
      bestSellerList={bestSellerList}
      isInMyCart={isInMyCart}
      setIsInMyCart={setIsInMyCart}
    />
  ) : (
    <div>없습니다</div>
  );
}
