import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getBookCategory } from "../../apis/books";
import { UserContext } from "../../context/context";

import CategoryNav from "../../components/navs/CategoryNav";
import BannerSlide from "../../components/sliders/BannerSlide";
import NowBookList from "../../components/sliders/NowBookList";
import Loading from "../../components/loading/Loading";

export default function MainDelay() {
  const [isLoading, setIsLoading] = useState(true);

  const [bookData, setBookData] = useState(null);
  const [categoryName, setCategoryName] = useState("romance");
  const me = useContext(UserContext);

  useEffect(() => {
    getBookCategory(categoryName)
      .then((data) => {
        setBookData(data);
        return data.length;
      })
      .then((isComplete) => isComplete && setIsLoading(false));

    console.log(me);
  }, [categoryName, me]);

  return isLoading ? (
    <Loading />
  ) : (
    <Main setCategoryName={setCategoryName} bookData={bookData} />
  );
}

function Main({ setCategoryName, bookData }) {
  const navigator = useNavigate();
  const [click, setClick] = useState([true, false, false, false]);

  const onClickCategory = (category, index) => {
    setClick(() => {
      const newArr = Array(4).fill(false);
      newArr[index] = !newArr[index];
      return newArr;
    });
    navigator(`/books?category=${category}`);
    setCategoryName(category);
  };

  const onClickBook = (id) => {
    navigator(`/books/${id}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <CategoryNav onClickCategory={onClickCategory} click={click} />
      <BannerSlide bookData={bookData} />
      <NowBookList bookData={bookData} onClickBook={onClickBook} />
    </div>
  );
}
