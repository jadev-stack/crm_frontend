import React from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const TipoPago = ({
  setTipoPago,
  tipoPago,
  setPago,
  pago,

  setReten,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setTipoPago(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Tipo de Pago
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={tipoPago}
          onChange={handleChange}
          label="Tipo de Pago"
          defaultValue={""}
        >
          <MenuItem value={"Credito"}>Credito</MenuItem>
          <MenuItem value={"Efectivo MD"}>Efectivo MD</MenuItem>
          <MenuItem value={"Transferencia Bs"}>Transferencia Bs</MenuItem>
          <MenuItem value={"Transferencia MD"}>Transferencia MD</MenuItem>
          <MenuItem value={"Zelle"}>Zelle</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="pago"
          type="number"
          label="Pago"
          name="Pago"
          autoComplete="Monto Pago"
          onChange={(e) => {
            setPago(e.target.value);
          }}
          value={pago}
        />
      </FormControl>
    </div>
  );
};
