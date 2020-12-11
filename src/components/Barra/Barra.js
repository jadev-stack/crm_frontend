import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: 30,
  },
  appbar: {
    background: "#00acee",
  },
}));

export const Barra = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link href="/home" color="inherit">
            Home
          </Link>
          <Link href="/users" color="inherit" className={classes.menu}>
            Usuarios
          </Link>
          <Link href="/cargas" color="inherit" className={classes.menu}>
            Cargas
          </Link>
          <Link href="/maestra" color="inherit" className={classes.menu}>
            Maestra
          </Link>
          <Link href="/saldos" color="inherit" className={classes.menu}>
            Saldos
          </Link>
        </Typography>

        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};
