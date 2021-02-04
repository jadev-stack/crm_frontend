import React, { useState } from "react";
import { BaseCard } from "../components/Analista/List/BaseCard";
import { Items } from "../components/Analista/Items/Items";

export const Analista = () => {
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
      <BaseCard
        setState={setState}
        setItems={setItems}
        setRcarga={setRcarga}
      />;
  }
  return <div>{component}</div>;
};
