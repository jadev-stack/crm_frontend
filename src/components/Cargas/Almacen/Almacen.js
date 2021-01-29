import React, { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { TableList } from "./List/TableList";
import { fetchListDespacho } from "./Utils/Despacho";
import { ModalDespacho } from "./List/ModalDespacho";
const useStyles = makeStyles({
  card: {
    margin: "50px",
  },
  button: {
    color: "#00acee",
  },
});

export const Almacen = () => {
  const classes = useStyles();
  const [despacho, setDespacho] = useState([]);

  useEffect(() => {
    fetchListDespacho(setDespacho);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalDespacho handleClose={handleClose} open={open} />
      <Card className={classes.card}>
        <CardHeader title="Relación de Carga"></CardHeader>
        <CardContent>
          <TableList despacho={despacho} setOpen={setOpen} />
        </CardContent>
      </Card>
    </Fragment>
  );
};