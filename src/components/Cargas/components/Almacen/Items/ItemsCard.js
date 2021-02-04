import React, { Fragment, useState } from "react";
import { Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { TableItems } from "./TableItems";
import { ModalItems } from "./ModalItems";

const useStyles = makeStyles({
  card: {
    margin: "50px",
  },
  button: {
    color: "#00acee",
  },
});

export const ItemsCard = ({ items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalItems handleClose={handleClose} open={open} />
      <Card className={classes.card}>
        <CardHeader title="Liquidación de Relación de Carga"></CardHeader>
        <CardContent>
          <TableItems items={items} setOpen={setOpen} />
        </CardContent>
      </Card>
    </Fragment>
  );
};
