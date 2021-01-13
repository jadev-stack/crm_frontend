import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TableList } from "./TableList";
import { fetchListRcarga } from "../Utils/List";
import { ModalRcarga } from "./ModalRcarga";

const useStyles = makeStyles({
  card: {
    margin: "50px",
  },
  button: {
    color: "#00acee",
  },
});

export const BaseCard = ({ setState, setId, setItems }) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchListRcarga(setList);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ModalRcarga
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        setState={setState}
      />
      <Card className={classes.card}>
        <CardHeader
          title="Relación de Carga"
          action={
            <IconButton
              className={classes.button}
              aria-label="Agregar Nueva Relación de Carga"
              onClick={() => {
                setOpen(true);
              }}
            >
              <AddIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <TableList
            list={list}
            setId={setId}
            setItems={setItems}
            setState={setState}
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
