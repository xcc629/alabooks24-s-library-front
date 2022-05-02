import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../config";
import TopNav from "../../components/navs/TopNav";
import MiddleNav from "../../components/navs/MiddleNav";
import CategoryNav from "../../components/navs/CategoryNav";
import BannerSlide from "../../components/sliders/BannerSlide";
import NowBookList from "../../components/sliders/NowBookList";

function Main() {
  const navigator = useNavigate();
  const [categoryName, setCategoryName] = useState("romance");
  const [click, setClick] = useState([true, false, false, false]);
  const [bookListObj, setBookListObj] = useState(mockData);

  useEffect(() => {
    fetch(`${BASE_URL}/books?category=${categoryName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setBookListObj(result));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/books?category=${categoryName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setBookListObj(result));
  }, [categoryName]);

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

export default Main;

const mockData = Array(5).fill({
  author: "SY",
  category: "romance-fantasy",
  id: 8,
  imgUrl:
    "https://user-images.githubusercontent.com/90035354/163523075-072ff8b4-38ea-47c6-aa2c-87b9f923028e.png",
  isbn: "2883283604341",
  price: 13400,
  publicationDate: "2015-01-24",
  publisher: "맥시",
  title: "엄마가 된 S급 헌터",
});
