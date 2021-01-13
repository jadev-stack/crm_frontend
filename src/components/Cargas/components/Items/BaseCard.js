import React, { Fragment, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  makeStyles,
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
});

export const BaseCard = ({ setState, id, items, setItems }) => {
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
        id={id}
        setItems={setItems}
      />
      <Card className={classes.card}>
        <CardHeader
          title="Items Relación de Carga"
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
          <TableItems id={id} items={items} />
        </CardContent>
      </Card>
    </Fragment>
  );
};
