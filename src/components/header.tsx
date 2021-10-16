import React from "react";
import Image from "next/dist/client/image";

import { makeStyles } from '@material-ui/styles';
import theme from "../config/theme";

import logo from '../assets/logo.png';

const useStyles = makeStyles({
  root: {
    background: theme.palette.secondary.main,
    position: 'relative',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: theme.palette.secondary.light,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 60px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: 15,
    },
  },
  texts: {
    margin: 0,
    padding: 0,
    top: 0,
    fontWeight: "bolder",
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='header' >
      <Image src={logo} alt="MARVEL" width={100} height={36.75} />
      <span className={classes.texts}>Meet the most famous characters!</span>
    </div>
  );
};
