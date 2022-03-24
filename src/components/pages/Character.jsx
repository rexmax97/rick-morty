import { React, useState, useEffect } from "react";
import { character } from "../../actions";
import {
  useParams
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  characterImage: {
   
    height: '30vh',
   width:'100vw'
    /* To change the font, use the fontFamily rule */
  },
}));
export default function Character(props) {
  const classes = useStyles();
  const [character, setStateCharacter] = useState([]);
  let { id } = useParams();
  console.log(id)
  useEffect(() => {

    fetchData(id);
  }, []);
  async function fetchData(id) {
    console.log(id)
    var characterData = [];
    characterData = await character(id).then(response => { console.log(response.data); return response.data });
    setStateCharacter(characterData);

  }



  return (<>
    {/*  <h1>Personaje</h1> */}
    <Box>
      <img src={character.image} classes={{root:classes.characterImage}} ></img>
      <h1>{character.name}</h1>
    </Box>


  </>)
}