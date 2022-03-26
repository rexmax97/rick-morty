import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { character } from "../../actions";
const useStyles = makeStyles(theme => ({
  characterImage: {
   
    height: '30vh',
   width:'100vw'
    /* To change the font, use the fontFamily rule */
  },
}));
const Character = (props)=>{
  const classes=useStyles();
 /*  const character = useSelector((state) => state.characterReducers.character) */
  const  { id } = useParams();
  useEffect(() => {

   props.character(id);
  }, []);



  return (<>
     <h1>Personaje</h1>
    <Box sx={{ width: '100%', mt: 10}}>
      <img src={character.image} classes={{root:classes.characterImage}} ></img>
      <h1>{character.name}</h1>
    </Box>


  </>)
}


const mapStateToProps = state => {
  // This is the longhand of what you did
  return {
    character: state.character,
  };
};


//connect takes two arguments mapStateToProps and mapActionsToProps / or just an object 
export default connect(mapStateToProps, { character })(Character);