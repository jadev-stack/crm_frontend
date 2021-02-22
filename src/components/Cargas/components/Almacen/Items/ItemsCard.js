import React, { Fragment, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  CardActions,
  Button,
} from "@material-ui/core";
import { TableItems } from "./TableItems";
import { ModalItems } from "./ModalItems";
import { fetchRcargaUpdate } from "../Utils/Liquidacion";

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

export const ItemsCard = ({
  items,
  itemsid,
  setItemsId,
  id,
  setItems,
  setState,
}) => {
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
        itemsid={itemsid}
        id={id}
        setItems={setItems}
      />
      <Card className={classes.card}>
        <CardHeader title="Liquidación de Relación de Carga"></CardHeader>
        <CardContent>
          <TableItems items={items} setOpen={setOpen} setItemsId={setItemsId} />
        </CardContent>
        <CardActions className={classes.btfooter}>
          <CardContent>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#00acee", color: "white" }}
              onClick={() => {
                let estatus = 4;
                fetchRcargaUpdate(id, estatus);
                setItems([]);
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
