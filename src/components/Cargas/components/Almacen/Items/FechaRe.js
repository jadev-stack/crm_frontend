import React from "react";
import { makeStyles, FormControl, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export const FechaRe = ({ fecha, setFecha }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="fecha"
          variant="outlined"
          type="date"
          label="Fecha Recepción"
          name="fecha"
          autoComplete="Fecha Recepción"
          onChange={(e) => {
            setFecha(e.target.value);
          }}
          value={fecha}
        />
      </FormControl>
    </div>
  );
};
