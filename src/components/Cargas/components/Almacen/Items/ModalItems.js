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
import { FechaRe } from "./FechaRe";
import { Documentos } from "./Documentos";
import moment from "moment";
import { fetchLiquiValues } from "../Utils/Liquidacion";

export const ModalItems = ({ handleClose, open, id, setItems, itemsid }) => {
  const [tipoPago, setTipoPago] = useState("Credito");
  const [reten, setReten] = useState("Ninguna");
  const [pago, setPago] = useState(0);
  const [fecha, setFecha] = useState(moment(Date.now()).format("yyyy-MM-DD"));
  const [documentos, setDocumentos] = useState("Ninguno");

  const cleanerInput = () => {
    setTipoPago("");
    setPago(0);
    setReten("Ninguna");
    setFecha(moment(Date.now()).format("yyyy-MM-DD"));
    setDocumentos("Ninguno");
  };

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
        <Documentos documentos={documentos} setDocumentos={setDocumentos} />
        <TipoPago
          setTipoPago={setTipoPago}
          tipoPago={tipoPago}
          pago={pago}
          setPago={setPago}
        />
        <Retencion reten={reten} setReten={setReten} />
        <FechaRe fecha={fecha} setFecha={setFecha} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            const liqui = {
              rcarga_id: id,
              documentos: documentos,
              docpago: tipoPago,
              pago: parseFloat(pago),
              reten: reten,
              fechare: fecha,
              rcarga_item_id: itemsid,
            };

            fetchLiquiValues(liqui, setItems);
            cleanerInput();
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
