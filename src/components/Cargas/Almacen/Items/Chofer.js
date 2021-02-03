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
export const Chofer = ({ chofer, setChoferS }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setChoferS(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="label-div">Chofer</InputLabel>
        <Select
          labelId="label-div"
          id="Chofer"
          onChange={handleChange}
          label="Chofer"
          defaultValue={""}
        >
          {chofer.map((row) => (
            <MenuItem value={row.nombre} key={row.id}>
              {row.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
