import React, { useState, useEffect } from "react";
import { BaseCard } from "./Analista/List/BaseCard";
import { Items } from "./Analista/Items/Items";
import { Almacen } from "./Almacen/Almacen";

export const Rcarga = () => {
  const [state, setState] = useState(1);
  const [items, setItems] = useState([]);
  const [rcarga, setRcarga] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  let component = null;

  const estado = () => {
    if (user.user_group === 3) {
      setState(3);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      estado();
    }
    return () => {
      isMounted = false;
    };
  });
  const compdef = <p></p>;

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
      component = compdef;
  }
  return <div>{component}</div>;
};
