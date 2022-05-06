import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getBookCategory } from "../../apis/books";
import { UserContext } from "../../context/context";

import TopNav from "../../components/navs/TopNav";
import MiddleNav from "../../components/navs/MiddleNav";
import CategoryNav from "../../components/navs/CategoryNav";
import BannerSlide from "../../components/sliders/BannerSlide";
import NowBookList from "../../components/sliders/NowBookList";
import Loading from "../../components/loading/Loading";

function MainDelay() {
  const [isLoading, setIsLoading] = useState(true);
  const [bookListObj, setBookListObj] = useState(null);
  const [categoryName, setCategoryName] = useState("romance");
  const me = useContext(UserContext);

  useEffect(() => {
    getBookCategory(categoryName)
      .then((data) => {
        setBookListObj(data);
        return data.length;
      })
      .then((isComplete) => isComplete && setIsLoading(false));
  }, [categoryName]);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <Main setCategoryName={setCategoryName} bookListObj={bookListObj} />
    </>
  );
}

function Main(props) {
  const navigator = useNavigate();
  const [click, setClick] = useState([true, false, false, false]);
  const { setCategoryName, bookListObj } = props;

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
      <TopNav />
      <MiddleNav />
      <CategoryNav onClickCategory={onClickCategory} click={click} />
      <BannerSlide bookListObj={bookListObj} />
      <NowBookList bookListObj={bookListObj} onClickBook={onClickBook} />
    </div>
  );
}

export default MainDelay;
