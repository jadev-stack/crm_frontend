import React from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
export const Documentos = ({ documentos, setDocumentos }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setDocumentos(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Documentos
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={documentos}
          onChange={handleChange}
          label="Tipo de Pago"
          defaultValue={""}
        >
          <MenuItem value={"Ninguno"}>Ninguno</MenuItem>
          <MenuItem value={"Todos"}>Todos</MenuItem>
          <MenuItem value={"1 Copia"}>1 Copia</MenuItem>
          <MenuItem value={"2 Copias"}>2 Copia</MenuItem>
          <MenuItem value={"Original y 1 Copia"}>Original y 1 Copia</MenuItem>
          <MenuItem value={"Original y 2 Copias"}>Original y 2 Copias</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
