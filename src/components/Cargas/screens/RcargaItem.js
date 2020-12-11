import React, { Fragment, useState } from "react";
import { Card, CardHeader, CardContent, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { fetchRcargaItem } from "../components/Utils";
import { ModalItems } from "../components/ModalItems";
export const RcargaItem = ({ rcargaid }) => {
  const [rcargaitem, setRcargaItem] = useState();
  const [open, setOpen] = useState(false);
  const Rcarga_Item = () => {
    fetchRcargaItem(setRcargaItem, setOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <ModalItems
        rcargaitem={rcargaitem}
        handleClose={handleClose}
        open={open}
      />
      <Card className={"card"}>
        <CardHeader
          title="Documentos Relación de Carga"
          action={
            <IconButton
              color="inherit"
              aria-label="Agregar Nueva Relación de Carga"
              onClick={() => {
                Rcarga_Item();
              }}
            >
              <AddIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent></CardContent>
      </Card>
    </Fragment>
  );
};
