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

export const BaseCard = ({ setState, setItems, setRcarga }) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchListRcarga(setList);
    }
    return () => {
      isMounted = false;
    };
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
        setRcarga={setRcarga}
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
            setItems={setItems}
            setState={setState}
            setRcarga={setRcarga}
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
