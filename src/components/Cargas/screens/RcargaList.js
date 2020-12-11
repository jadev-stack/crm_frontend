import React, { useState, useEffect, Fragment } from "react";
import { Card, CardHeader, CardContent, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ModalRcarga } from "../components/ModalRcarga";
import { TableRcarga } from "../components/TableRcarga";
import { fetchRcarga, fetchRutas, fetchDivision } from "../components/Utils";

import "../css/RcargaList.css";

export const RcargaList = ({ setState, setId }) => {
  const [rcarga, setRcarga] = useState([]);
  const [ruta, setRuta] = useState("");
  const [rutas, setRutas] = useState();
  const [divis, setDivis] = useState();
  const [div, setDiv] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchRcarga(setRcarga);
  }, []);

  const RcargaDatos = () => {
    fetchDivision(setDivis);
    fetchRutas(setRutas, setRuta, setOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalRcarga
        open={open}
        handleClose={handleClose}
        rutas={rutas}
        setRutas={setRutas}
        ruta={ruta}
        setRuta={setRuta}
        divis={divis}
        setDiv={setDiv}
        div={div}
        setState={setState}
      ></ModalRcarga>

      <Card className={"card"}>
        <CardHeader
          title="Relación de Carga"
          action={
            <IconButton
              color="inherit"
              aria-label="Agregar Nueva Relación de Carga"
              onClick={() => {
                RcargaDatos();
              }}
            >
              <AddIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <TableRcarga rcarga={rcarga} setState={setState} setId={setId} />
        </CardContent>
      </Card>
    </Fragment>
  );
};
