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
export const Vehiculo = ({ placa, setPlacaS }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setPlacaS(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="label-div">Vehiculo</InputLabel>
        <Select
          labelId="label-div"
          id="Vehiculo"
          onChange={handleChange}
          label="Vehiculo"
          defaultValue={""}
        >
          {placa.map((row) => (
            <MenuItem value={row.id} key={row.id}>
              {row.placa}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
