import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { RutaRcarga } from "./RutaRcarga";
import { DivisRcarga } from "./DivisRcarga";
import { useHistory } from "react-router-dom";
const API = process.env.REACT_APP_API;

export const ModalItems = ({
  open,
  handleClose,
  rutas,
  ruta,
  setRuta,
  divis,
  div,
  setDiv,
}) => {
  const history = useHistory();
  const fectRcarga = async () => {
    const res = await fetch(`${API}api/rcarga`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        total: 0,
        vol: 0,
        ruta_id: ruta,
        estatus_id: 1,
        user_id: 1,
        division_id: div,
        sede_id: 1,
      }),
    });

    if (res.ok === true) {
      history.push("/maestra");
    } else {
      console.log("Fallido");
    }
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
              fectRcarga();
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
