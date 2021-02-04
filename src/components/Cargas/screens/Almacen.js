import React, { useState } from "react";
import { BaseCard } from "../components/Almacen/List/BaseCard";
import { ItemsCard } from "../components/Almacen/Items/ItemsCard";

export const Almacen = () => {
  const [state, setState] = useState(1);
  const [items, setItems] = useState([]);

  let component = null;

  switch (state) {
    case 1:
      component = <BaseCard setState={setState} setItems={setItems} />;
      break;
    case 2:
      component = <ItemsCard setState={setState} items={items} />;
      break;

    default:
      <BaseCard setState={setState} setItems={setItems} />;
  }
  return <div>{component}</div>;
};
