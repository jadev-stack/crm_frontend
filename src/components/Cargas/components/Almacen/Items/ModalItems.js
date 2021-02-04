import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { TipoPago } from "./TipoPago";
import { Retencion } from "./Retencion";

export const ModalItems = ({ handleClose, open, id }) => {
  const [tipoPago, setTipoPago] = useState("Credito");
  const [reten, setReten] = useState("Ninguna");
  const [pago, setPago] = useState(0);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      animation={"false"}
    >
      <DialogTitle id="alert-dialog-title">
        {"Datos Para Liquidación de Documento"}
      </DialogTitle>
      <DialogContent>
        <TipoPago
          setTipoPago={setTipoPago}
          tipoPago={tipoPago}
          pago={pago}
          setPago={setPago}
        />
        <Retencion reten={reten} setReten={setReten} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            console.log(tipoPago, pago, reten);
            handleClose();
            setTipoPago("");
            setPago(0);
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
