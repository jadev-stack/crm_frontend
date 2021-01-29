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
} from "../Utils/Despacho";

import { Chofer } from "../Items/Chofer";
import { Ayudante } from "../Items/Ayudante";
import { Vehiculo } from "../Items/Vehiculo";

export const ModalDespacho = ({ handleClose, open }) => {
  const [chofer, setChofer] = useState("");
  const [ayudante, setAyudante] = useState("");
  const [placa, setPlaca] = useState("");

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
        <Chofer chofer={chofer} />
        <Ayudante ayudante={ayudante} />
        <Vehiculo placa={placa} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => {}} color="primary" autoFocus>
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
};
