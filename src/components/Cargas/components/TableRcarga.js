import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Edit } from "@material-ui/icons";
import { Estatus } from "./Estatus";
const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export const TableRcarga = ({ rcarga, setState, setId }) => {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">División</TableCell>
              <TableCell align="center">Ruta&nbsp;</TableCell>
              <TableCell align="center">Valor&nbsp;</TableCell>
              <TableCell align="center">Volumen&nbsp;</TableCell>
              <TableCell align="center">Status&nbsp;</TableCell>
              <TableCell align="center">Acción&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rcarga.map((row) => (
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
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setId(row.id);
                      setState(2);
                    }}
                  >
                    <Edit />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
