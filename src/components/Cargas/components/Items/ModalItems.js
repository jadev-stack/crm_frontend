import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  makeStyles,
  InputLabel,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import { fectRcargaItemValues } from "../Utils/Items";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  InputDocu: {
    marginTop: theme.spacing(2),
  },
}));

export const ModalItems = ({
  open,
  handleClose,
  rcarga,
  setItems,
  setRcarga,
}) => {
  const classes = useStyles();
  const [sistema, setSistema] = useState("");
  const [invoice, setInvoice] = useState("");

  const invoiceChange = (event) => {
    setInvoice(event.target.value);
  };
  const handleChange = (event) => {
    setSistema(event.target.value);
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
          {"Ingrese La Información del Documento"}
        </DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Sistema
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={sistema}
              onChange={handleChange}
              label="Sistema"
            >
              <MenuItem value="SAP">
                <em>SAP</em>
              </MenuItem>
              <MenuItem value="SAINT">
                <em>SAINT</em>
              </MenuItem>
            </Select>
            <TextField
              id="outlined-basic"
              label="Documento"
              variant="outlined"
              onChange={invoiceChange}
              value={invoice}
              className={classes.InputDocu}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleClose();
              fectRcargaItemValues(
                sistema,
                invoice,
                rcarga.id,
                setItems,
                setRcarga
              );
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
