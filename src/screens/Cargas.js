import React from "react";
import { Barra } from "../components/Barra/Barra";
import { Analista } from "../components/Cargas/screens/Analista";
import { Almacen } from "../components/Cargas/screens/Almacen";
export const Cargas = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let component = null;
  user.user_group !== 3
    ? (component = <Analista />)
    : (component = <Almacen />);

  return (
    <div>
      <Barra />
      {component}
    </div>
  );
};
