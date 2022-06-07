import * as React from "react";

import useStores from "../stores/useStore";

export default function Test() {
  const { modalStore } = useStores();
  return (
    <button
      onClick={() => {
        modalStore.openModal("아아아", "pass");
      }}
    >
      클릭해봐
    </button>
  );
}
