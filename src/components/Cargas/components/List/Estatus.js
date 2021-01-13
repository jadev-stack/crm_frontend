import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  abierto: {
    backgroundColor: "gray",
    borderColor: "gray",
  },
  predespacho: {
    backgroundColor: "#00acee",
    borderColor: "#00acee",
  },
  despacho: {
    backgroundColor: "green",
    borderColor: "green",
  },
  label: {
    color: "white",
  },
}));

export const Estatus = ({ estatus }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        label={estatus}
        className={
          estatus === "ABIERTO"
            ? classes.abierto
            : estatus === "PREDESPACHO"
            ? classes.predespacho
            : classes.despacho
        }
        classes={{ label: classes.label }}
      />
    </div>
  );
};
