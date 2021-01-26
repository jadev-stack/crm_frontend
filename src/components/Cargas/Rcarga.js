import React, { useState } from "react";
import { BaseCard } from "./components/List/BaseCard";
import { Items } from "./components/Items/Items";
import { Almacen } from "./components/Almacen/Almacen";

export const Rcarga = () => {
  const [state, setState] = useState(1);
  const [items, setItems] = useState([]);
  const [rcarga, setRcarga] = useState({});
  const user = localStorage.getItem("user");
  let component = null;

  if (user.usergroup === "3") {
    setState(3);
  }

  switch (state) {
    case 1:
      component = (
        <BaseCard
          setState={setState}
          setItems={setItems}
          setRcarga={setRcarga}
        />
      );
      break;
    case 2:
      component = (
        <Items
          setState={setState}
          items={items}
          setItems={setItems}
          rcarga={rcarga}
          setRcarga={setRcarga}
        />
      );
      break;
    case 3:
      component = <Almacen />;
      break;
    default:
      component = (
        <BaseCard
          setState={setState}
          setItems={setItems}
          setRcarga={setRcarga}
        />
      );
  }
  return <div>{component}</div>;
};
