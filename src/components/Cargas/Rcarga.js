import React, { useState } from "react";
import { BaseCard } from "./components/List/BaseCard";
import { Items } from "./components/Items/Items";

export const Rcarga = () => {
  const [state, setState] = useState(1);
  const [id, setId] = useState();
  const [items, setItems] = useState([]);

  let component = null;
  switch (state) {
    case 1:
      component = (
        <BaseCard setState={setState} setId={setId} setItems={setItems} />
      );
      break;
    case 2:
      component = (
        <Items setState={setState} id={id} items={items} setItems={setItems} />
      );
      break;
    default:
      component = (
        <BaseCard setState={setState} setId={setId} setItems={setItems} />
      );
  }
  return <div>{component}</div>;
};
