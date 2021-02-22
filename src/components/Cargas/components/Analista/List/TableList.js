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
import { Edit, PictureAsPdf, CheckCircle } from "@material-ui/icons";
import { Estatus } from "../../Estatus";
import { fetchRcargaItem } from "../Utils/Items";
import { fetchRcarga, fetchRcargaUpdate2 } from "../Utils/Rcarga";

const useStyles = makeStyles({
  head: {
    backgroundColor: "#999999",
  },
});

export const TableList = ({ list, setItems, setState, setList, setRcarga }) => {
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
              Volumen&nbsp;
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
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.numero}
              </TableCell>
              <TableCell align="center">
                {moment(row.fecha).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="center">{row.rcarga_division.name}</TableCell>
              <TableCell align="center">{row.rcarga_ruta.ruta}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center">{row.vol}</TableCell>
              <TableCell align="center">
                <Estatus estatus={row.rcarga_estatus.estatus} />
              </TableCell>
              <TableCell align="center">
                {row.rcarga_estatus.estatus === "ABIERTA" ? (
                  <Fragment>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        fetchRcarga(row.id, setRcarga);
                        fetchRcargaItem(row.id, setItems, setState);
                      }}
                    >
                      <Edit color="action" />
                    </Link>
                  </Fragment>
                ) : row.rcarga_estatus.estatus === "PREDESPACHO" ? (
                  <Fragment>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        fetchRcarga(row.id, setRcarga);
                        fetchRcargaItem(row.id, setItems, setState);
                      }}
                    >
                      <Edit color="action" />
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <PictureAsPdf style={{ color: "#00acee" }} />
                    </Link>
                  </Fragment>
                ) : row.rcarga_estatus.estatus === "DESPACHO" ? (
                  <Fragment>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <PictureAsPdf style={{ color: "green" }} />
                    </Link>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <PictureAsPdf style={{ color: "#ffc145" }} />
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        let estatus = 5;
                        fetchRcargaUpdate2(row.id, estatus, setList);
                      }}
                    >
                      <CheckCircle style={{ color: "red" }} />
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
