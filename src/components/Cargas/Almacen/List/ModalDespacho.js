import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

import {
  fetchListChofer,
  fetchListAyudante,
  fetchListPlaca,
  fetchDespachoValues,
} from "../Utils/Despacho";

import { Chofer } from "../Items/Chofer";
import { Ayudante } from "../Items/Ayudante";
import { Vehiculo } from "../Items/Vehiculo";

export const ModalDespacho = ({ handleClose, open, id, setDespacho }) => {
  const [chofer, setChofer] = useState("");
  const [choferS, setChoferS] = useState("");
  const [ayudante, setAyudante] = useState("");
  const [ayudanteS, setAyudanteS] = useState("");
  const [placa, setPlaca] = useState("");
  const [placaS, setPlacaS] = useState("");

  useEffect(() => {
    fetchListChofer(setChofer);
    fetchListAyudante(setAyudante);
    fetchListPlaca(setPlaca);
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
        {"Escoja los datos para el Despacho"}
      </DialogTitle>
      <DialogContent>
        <Chofer chofer={chofer} setChoferS={setChoferS} />
        <Ayudante ayudante={ayudante} setAyudanteS={setAyudanteS} />
        <Vehiculo placa={placa} setPlacaS={setPlacaS} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            fetchDespachoValues(id, choferS, ayudanteS, placaS, setDespacho);
            handleClose();
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
