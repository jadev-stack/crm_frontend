import React, { useState } from "react";
import { BaseCard } from "./components/List/BaseCard";
import { Items } from "./components/Items/Items";

export const Rcarga = () => {
  const [state, setState] = useState(1);
  const [items, setItems] = useState([]);
  const [rcarga, setRcarga] = useState({});

  let component = null;
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
