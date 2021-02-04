import React, { Fragment } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  makeStyles,
} from "@material-ui/core";

import moment from "moment";
import { AssignmentInd, Feedback } from "@material-ui/icons";
import { Estatus } from "../../Estatus";
import { fetchListLiqui } from "../Utils/Liquidacion";
const useStyles = makeStyles({
  head: {
    backgroundColor: "#999999",
  },
});

export const TableList = ({ despacho, setOpen, setId, setState, setItems }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell style={{ color: "white" }} align="center">
              #
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Fecha
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              División
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Ruta&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Valor $&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Chofer&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Ayudante&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Vehiculo&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Estatus&nbsp;
            </TableCell>
            <TableCell style={{ color: "white" }} align="center">
              Acción&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {despacho.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.numero}
              </TableCell>
              <TableCell align="center">
                {moment(row.fecha).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="center">{row.division}</TableCell>
              <TableCell align="center">{row.ruta}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.chofer}</TableCell>
              <TableCell align="center">{row.ayudante}</TableCell>
              <TableCell align="center">{row.placa}</TableCell>
              <TableCell align="center">
                <Estatus estatus={row.estatus} />
              </TableCell>
              <TableCell align="center">
                {row.estatus === "PREDESPACHO" ? (
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                      setId(row.id);
                    }}
                  >
                    <AssignmentInd color="action" />
                  </Link>
                ) : (
                  <Fragment>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(true);
                        setId(row.id);
                      }}
                    >
                      <AssignmentInd color="action" />
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        fetchListLiqui(row.id, setItems);
                        setState(2);
                      }}
                    >
                      <Feedback color="action" />
                    </Link>
                  </Fragment>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
