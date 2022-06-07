import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";

function UseStores() {
  return useContext(MobXProviderContext);
}

export default UseStores;
