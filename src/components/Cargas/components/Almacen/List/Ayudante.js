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
export const Ayudante = ({ ayudante, setAyudanteS }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setAyudanteS(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="label-div">Ayudantes</InputLabel>
        <Select
          labelId="label-div"
          id="Ayudante"
          onChange={handleChange}
          label="Ayudante"
          defaultValue={""}
        >
          {ayudante.map((row) => (
            <MenuItem value={row.nombre} key={row.id}>
              {row.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
