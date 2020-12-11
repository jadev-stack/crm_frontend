import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { RutaRcarga } from "./RutaRcarga";
import { DivisRcarga } from "./DivisRcarga";
import { fectRcargaPost } from "./Utils";

export const ModalRcarga = ({
  open,
  handleClose,
  rutas,
  ruta,
  setRuta,
  divis,
  div,
  setDiv,
  setState,
}) => {
  const fectResponse = async () => {
    fectRcargaPost(ruta, div, setState);
  };

  return (
    <div>
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
          <DivisRcarga div={div} setDiv={setDiv} divis={divis} />
          <RutaRcarga ruta={ruta} setRuta={setRuta} rutas={rutas} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              fectResponse();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
