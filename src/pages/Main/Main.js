import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../config";
import Nav from "../../components/Nav/Nav";
import MainNav from "../../components/MainNav/MainNav";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import BannerSlide from "../../components/Slide/BannerSlide";
import NowBookList from "../../components/NowBookList/NowBookList";

function Main() {
  console.log("rendering");
  const navigator = useNavigate();
  const [categoryName, setCategoryName] = useState("romance");
  const [click, setClick] = useState([true, false, false, false]);
  const [bookListObj, setBookListObj] = useState([
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
  ]);

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
    navigator(`/books?category=${categoryName}`);
    setCategoryName(category);
  };

  const onClickBook = (id) => {
    console.log(id);
    navigator(`/books/${id}`);
  };

  return (
    <>
      <Nav />
      <MainNav />
      <CategoryNav onClickCategory={onClickCategory} click={click} />
      <BannerSlide bookListObj={bookListObj} />
      <NowBookList bookListObj={bookListObj} onClickBook={onClickBook} />
    </>
  );
}

export default Main;
