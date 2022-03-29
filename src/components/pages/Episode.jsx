import { React, useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { episode } from "../../actions";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  characterImage: {
   
    height: '30vh',
   width:'100vw'
    /* To change the font, use the fontFamily rule */
  },
}));
const  Episode =(props)=> {
  const  { id } = useParams();
  const classes=useStyles();
  const episode = useSelector((state) => state.episodeReducers.episode)

  useEffect(() => {

    props.episode(id);
   }, []);
 
 
    return (<>
   
<Box sx={{ width: '100%', mt: 10}}>
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
        >
            <Grid item xs={12} sm={12} md={12}>
                  <h1>Episodio</h1>
                <Box sx={{ width: '100%', mt: 10}}>
                  <img src={episode.airdate?episode.image:'/assets/img/unknown.jpeg'} alt={episode.title} classes={{root:classes.characterImage}} ></img>
                  <h1>{episode.name}</h1>
                  <br></br>
                  Tipo: <p>{episode.type?episode.type:'Sin Tipo'}</p>
                </Box>
              </Grid>
          

        </Grid>
</Box>
    </>)
  }

  
const mapStateToProps = state => {
  // This is the longhand of what you did
  return {
    episode: state.episode,
  };
};


//connect takes two arguments mapStateToProps and mapActionsToProps / or just an object 
export default connect(mapStateToProps, { episode })(Episode);