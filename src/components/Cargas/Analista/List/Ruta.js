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
export const Ruta = ({ setRuta, ruta, rutas }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setRuta(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Ruta</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={ruta}
          onChange={handleChange}
          label="Ruta"
          defaultValue={""}
        >
          {rutas.map((row) => (
            <MenuItem value={row.id} key={row.id}>
              {row.ruta}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
