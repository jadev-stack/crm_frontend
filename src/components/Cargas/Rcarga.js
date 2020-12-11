import React, { useState } from "react";
import { RcargaList } from "./screens/RcargaList";
import { RcargaItem } from "./screens/RcargaItem";
export const Rcarga = () => {
  const [state, setState] = useState(1);
  const [rcargaid, setId] = useState();

  let component = null;
  switch (state) {
    case 1:
      component = <RcargaList setState={setState} setId={setId} />;
      break;
    case 2:
      component = <RcargaItem setState={setState} rcargaid={rcargaid} />;
      break;
    default:
      component = <RcargaList setState={setState} setId={setId} />;
  }
  return <div>{component}</div>;
};
