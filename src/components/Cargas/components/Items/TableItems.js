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
import DeleteIcon from "@material-ui/icons/Delete";

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
export const TableItems = ({ items }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"># Documento&nbsp;</TableCell>
            <TableCell align="center">Cliente&nbsp;</TableCell>
            <TableCell align="center">Unidades&nbsp;</TableCell>
            <TableCell align="center">Cajas&nbsp;</TableCell>
            <TableCell align="center">Valor&nbsp;</TableCell>
            <TableCell align="center">Acción&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.docnum}
              </TableCell>
              <TableCell align="center">{row.cardname}</TableCell>
              <TableCell align="center">{row.unidad}</TableCell>
              <TableCell align="center">{row.cajas}</TableCell>
              <TableCell align="center">{row.totalvalor}</TableCell>
              <TableCell align="center">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <DeleteIcon color="error" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
