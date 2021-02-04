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
export const Retencion = ({ reten, setReten }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setReten(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Retención
        </InputLabel>

        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={reten}
          onChange={handleChange}
          label="Retención"
          defaultValue={""}
        >
          <MenuItem value={"Ninguna"}>Ninguna</MenuItem>
          <MenuItem value={"Iva"}>Iva</MenuItem>
          <MenuItem value={"Municipal"}>Municipal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
