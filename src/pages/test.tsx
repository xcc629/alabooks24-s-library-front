import * as React from "react";

import useStores from "../stores/useStore";
import AuthorProfile from "../components/atoms/AuthorProfileItem";
import BookProfile from "../components/atoms/BookProfileItem";

export default function Test() {
  const { modalStore } = useStores();
  return (
    <>
      <button
        onClick={() => {
          modalStore.openModal("아아아", "pass");
        }}
      >
        클릭해봐
      </button>
      <AuthorProfile
        authorName={"갓생살자"}
        mainBookName={"니들이 갓생을 알아?"}
        bookCount={5}
      />
      <AuthorProfile
        authorName={"갓생살자"}
        mainBookName={"니들이 갓생을 알아?"}
        bookCount={5}
      />
      <BookProfile
        id={0}
        bookImgUrl={"https://img.ridicdn.net/cover/777103439/small?dpi=xhdpi#1"}
        title="[e북] 악녀를 죽여 줘"
        author="사월생"
        star={4.2}
        totalComment={126}
        publisher={"디앤씨북스"}
        category={"로맨스 판타지"}
        price={3000}
      />
    </>
  );
}
