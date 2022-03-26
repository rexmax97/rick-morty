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

  const useStyles = makeStyles(theme => ({
    appbar: {
      backgroundColor: '#FFF',
      color: '#0289ffcf',
      height: '55px !important',
      maxHeight:'100px !important',
      /* To change the font, use the fontFamily rule */
    },
  }));
export default function Navbar() {
      const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar classes={{root:classes.appbar}}   position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
           <img src="./assets/img/logo.png" height={50} width={50}/>
          </Typography>
          <Button color="inherit" component={Link} to="/"><Home/></Button>
          <Button color="inherit" component={Link} to="contact"><Info/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
