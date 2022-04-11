import Nav from "../../components/Nav/Nav";
import MainNav from "../../components/MainNav/MainNav";
import { useEffect } from "react";
import style from "./Detail.module.css";

function Detail() {
  const bookId = 1;
  useEffect(() => {
    fetch(`/books/${bookId}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <section>
      <Nav />
      <MainNav />
      <main></main>
      <aside></aside>
    </section>
  );
}

export default Detail;
