import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getBookCategory } from "../../apis/books";

import CategoryNav from "../../components/molocule/navs/CategoryNav";
import BannerSlide from "../../components/molocule/sliders/BannerSlide";
import NowBookList from "../../components/molocule/sliders/NowBookList";
import Loading from "../../components/molocule/Loading";

export default function MainDelay() {
  const { search } = useLocation();

  const selectCategorySearch = () => {
    let index = search.indexOf("=");
    let category = search.slice(index + 1);
    return category;
  };

  const [isLoading, setIsLoading] = useState(true);
  const [bookData, setBookData] = useState(null);
  const [categoryName, setCategoryName] = useState(selectCategorySearch());

  useEffect(() => {
    setCategoryName(selectCategorySearch());
  }, [search]);

  useEffect(() => {
    const renderCategory = async () => {
      try {
        const data = await getBookCategory(categoryName);

        if (data.message) throw new Error(data.message);

        setBookData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    renderCategory();
  }, [categoryName]);

  return isLoading ? (
    <Loading />
  ) : (
    <Main
      categoryName={categoryName}
      setCategoryName={setCategoryName}
      bookData={bookData}
    />
  );
}

function Main({ categoryName, setCategoryName, bookData }) {
  const navigator = useNavigate();

  const onClickCategory = (category) => {
    navigator(`/books?category=${category}`);
  };

  const onClickBook = (id) => {
    navigator(`/books/${id}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <CategoryNav
        onClickCategory={onClickCategory}
        categoryName={categoryName}
      />
      <BannerSlide bookData={bookData} />
      <NowBookList bookData={bookData} onClickBook={onClickBook} />
    </div>
  );
}
