import React, { useState } from "react";
import { BaseCard } from "../components/Almacen/List/BaseCard";
import { ItemsCard } from "../components/Almacen/Items/ItemsCard";

export const Almacen = () => {
  const [state, setState] = useState(1);
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [itemsid, setItemsId] = useState();

  let component = null;

  switch (state) {
    case 1:
      component = (
        <BaseCard
          setState={setState}
          setItems={setItems}
          id={id}
          setId={setId}
        />
      );
      break;
    case 2:
      component = (
        <ItemsCard
          setState={setState}
          items={items}
          itemsid={itemsid}
          setItemsId={setItemsId}
          id={id}
          setItems={setItems}
        />
      );
      break;

    default:
      <BaseCard
        setState={setState}
        setItems={setItems}
        id={id}
        setId={setId}
      />;
  }
  return <div>{component}</div>;
};
