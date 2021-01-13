import React, { Fragment, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TableItems } from "./TableItems";
import { ModalItems } from "./ModalItems";
const useStyles = makeStyles({
  card: {
    margin: "50px",
  },
  button: {
    color: "#00acee",
  },
  btfooter: {
    justifyContent: "flex-end",
    color: "#00acee",
  },
});

export const BaseCard = ({ items, setItems, rcarga, setRcarga, setState }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalItems
        handleClose={handleClose}
        open={open}
        rcarga={rcarga}
        setRcarga={setRcarga}
        setItems={setItems}
      />
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography variant="h5">
              Relacion de Carga #: {rcarga.numero}
            </Typography>
          }
          subheader={
            <Typography variant="h6">Total: {rcarga.total}</Typography>
          }
          action={
            <IconButton
              className={classes.button}
              aria-label="Agregar Nuevo Documento"
              onClick={() => {
                setOpen(true);
              }}
            >
              <AddIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <TableItems setRcarga={setRcarga} items={items} setItems={setItems} />
        </CardContent>
        <CardActions className={classes.btfooter}>
          <CardContent>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#00acee", color: "white" }}
              onClick={() => {
                console.log("Hola");
                setState(1);
              }}
            >
              Generar
            </Button>
          </CardContent>
        </CardActions>
      </Card>
    </Fragment>
  );
};
