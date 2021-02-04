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
export const Division = ({ division, selectDivi, setSelectDiv }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectDiv(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="label-div">División</InputLabel>
        <Select
          labelId="label-div"
          id="Division"
          value={selectDivi}
          onChange={handleChange}
          label="Division"
          defaultValue={""}
        >
          {division.map((row) => (
            <MenuItem value={row.id} key={row.id}>
              {row.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
