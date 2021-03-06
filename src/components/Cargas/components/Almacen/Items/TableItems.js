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
import moment from "moment";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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

export const TableItems = ({ items, setOpen, setItemsId }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"># Factura&nbsp;</TableCell>
            <TableCell align="center">Cliente&nbsp;</TableCell>
            <TableCell align="center">Documentos&nbsp;</TableCell>
            <TableCell align="center">Tipo Pago&nbsp;</TableCell>
            <TableCell align="center">Pago&nbsp;</TableCell>
            <TableCell align="center">Fecha&nbsp;</TableCell>
            <TableCell align="center">Acción&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.docnum}>
              <TableCell component="th" scope="row">
                {row.docnum}
              </TableCell>
              <TableCell align="left">{row.cardname}</TableCell>
              <TableCell align="left">{row.documentos}</TableCell>
              <TableCell align="center">{row.docpago}</TableCell>
              <TableCell align="center">{row.pago}</TableCell>
              <TableCell align="center">
                {row.fechare ? moment(row.fechare).format("DD/MM/YYYY") : ""}
              </TableCell>
              <TableCell align="center">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                    setItemsId(row.itemsid);
                  }}
                >
                  <Add color="action" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
