import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { character } from "../../actions";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  characterImage: {
   
    height: '30vh',
   width:'100vw'
    /* To change the font, use the fontFamily rule */
  },
}));
const Character = (props)=>{
  const  { id } = useParams();
  const classes=useStyles();
  const character = useSelector((state) => state.characterReducers.character)

  useEffect(() => {

   props.character(id);
  }, []);



  return (<>

<Box sx={{ width: '100%', mt: 10}}>
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
        >
            <Grid item xs={12} sm={12} md={12}>
                  <h1>Personaje</h1>
                <Box sx={{ width: '100%', mt: 10}}>
                  <img src={character.image?character.image:'/assets/img/unknown.jpeg'} alt={character.title} classes={{root:classes.characterImage}} ></img>
                  <h1>{character.name}</h1>
                  Tipo: <p>{character.type?character.type:'Sin Tipo'}</p>
                  <p> Species: {character.species}</p>
                  <p> Gender: {character.gender}</p>
                </Box>
              </Grid>
          

        </Grid>
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