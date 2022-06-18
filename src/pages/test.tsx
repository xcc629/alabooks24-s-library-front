import * as React from "react";

import useStores from "../stores/useStore";
import AuthorProfile from "../components/atomic/AuthorProfile";

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
    </>
  );
}
