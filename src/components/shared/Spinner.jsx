import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Home, Info, Search } from '@material-ui/icons';
import { SearchModal } from '.';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

  const useStyles = makeStyles(theme => ({
    spinner: {
        height:"100vh !important",
        width:"100vw  !important"
      /* To change the font, use the fontFamily rule */
    },
  }));
export default function Spinner() {
      const classes = useStyles();
  return (
    <CircularProgress disableShrink  classes={{root:classes.spinner}}/>
  );
}
