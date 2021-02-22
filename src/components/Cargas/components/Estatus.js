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
    backgroundColor: "#b40d39",
    borderColor: "#b40d39",
  },
  predespacho: {
    backgroundColor: "#00acee",
    borderColor: "#00acee",
  },
  despacho: {
    backgroundColor: "green",
    borderColor: "green",
  },
  liquidada: {
    backgroundColor: "#ffc145",
    borderColor: "#ffc145",
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
          estatus === "ABIERTA"
            ? classes.abierto
            : estatus === "PREDESPACHO"
            ? classes.predespacho
            : estatus === "DESPACHO"
            ? classes.despacho
            : classes.liquidada
        }
        classes={{ label: classes.label }}
      />
    </div>
  );
};
