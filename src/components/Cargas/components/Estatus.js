import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    backgroundColor: "#00acee",
    color: "White",
    borderRadius: 8,
    fontSize: 18,
  },
}));

export const Estatus = ({ estatus }) => {
  const classes = useStyles();
  return (
    <div>
      <InputLabel className={classes.label}>{estatus}</InputLabel>
    </div>
  );
};
