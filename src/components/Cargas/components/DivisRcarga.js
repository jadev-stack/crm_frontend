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

export const DivisRcarga = ({ divis, setDiv, div }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setDiv(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="label-div">División</InputLabel>
        <Select
          labelId="label-div"
          id="Division"
          value={div}
          onChange={handleChange}
          label="Division"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {divis.map((row) => (
            <MenuItem value={row.id} key={row.id}>
              {row.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
