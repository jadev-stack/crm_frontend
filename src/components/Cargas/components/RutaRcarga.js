import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const RutaRcarga = ({ ruta, setRuta, rutas }) => {
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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
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
