import React, { Fragment, useState, useEffect } from "react";
import { Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { TableList } from "./TableList";
import { fetchListDespacho } from "../Utils/Despacho";
import { ModalDespacho } from "./ModalDespacho";

const useStyles = makeStyles({
  card: {
    margin: "50px",
  },
  button: {
    color: "#00acee",
  },
});

export const BaseCard = ({ setState, setItems }) => {
  const classes = useStyles();
  const [despacho, setDespacho] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    fetchListDespacho(setDespacho);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalDespacho
        handleClose={handleClose}
        open={open}
        id={id}
        setDespacho={setDespacho}
      />
      <Card className={classes.card}>
        <CardHeader title="Relación de Carga"></CardHeader>
        <CardContent>
          <TableList
            despacho={despacho}
            setOpen={setOpen}
            setId={setId}
            setState={setState}
            setItems={setItems}
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
