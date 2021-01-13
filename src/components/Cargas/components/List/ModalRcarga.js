import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Division } from "./Division";
import { Ruta } from "./Ruta";
import { fetchDivision, fetchRutas } from "../Utils/Crm";
import { fectRcargaPost } from "../Utils/Rcarga";

export const ModalRcarga = ({ handleClose, open, setState, setRcarga }) => {
  const [ruta, setRuta] = useState(1);
  const [rutas, setRutas] = useState("");
  const [division, setDivision] = useState("");
  const [selectDiv, setSelectDiv] = useState(1);

  useEffect(() => {
    fetchRutas(setRutas);
    fetchDivision(setDivision);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      animation={"false"}
    >
      <DialogTitle id="alert-dialog-title">
        {"Escoja la ruta para la Relación de Carga"}
      </DialogTitle>
      <DialogContent>
        <Division division={division} setSelectDiv={setSelectDiv} />
        <Ruta setRuta={setRuta} rutas={rutas} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            fectRcargaPost(ruta, selectDiv, setState, setRcarga);
          }}
          color="primary"
          autoFocus
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
};
