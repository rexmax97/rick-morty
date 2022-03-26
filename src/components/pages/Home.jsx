import React from "react";
import { SearchModal, TitlebarImageList, TabPanel, ImgMediaCard, OutlinedCard } from "../shared";
import { useEffect, useState } from "react";
import { connect, useSelector } from 'react-redux';
import { characters, episodes } from "../../actions";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { createSelector } from 'redux';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
const Home = (props) => {
  const classes = useStyles();
  /* const [characters, setCharacters] = useState(0) */
  const [value, setValue] = useState(0);
  const characters = useSelector((state) => state.charactersReducers.characters)
  const episodes = useSelector((state) => state.episodesReducers.episodes)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {

    props.characters();

    props.episodes();


  }, []);



  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  return (<>

    {/* <h1>Pagina de inicio</h1> */}
    
  
    <Box sx={{ width: '100%', mt: 10}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Personajes" {...a11yProps(0)} />
          <Tab label="Episodios" {...a11yProps(1)} />
        </Tabs>
      </Box>


      <TabPanel value={value} index={0} component={'div'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify="center"
        >
            <Grid item xs={12} sm={12} md={12}>
            <SearchModal></SearchModal>
              </Grid>
          {characters.map((character) => {
            return (<Grid item xs={12} sm={6} md={4}>
              <OutlinedCard title={character.name} image={character.image} type={"character"}  id={character.id} content={"Specie: "+character.species+" Status: "+character.status}  />
            </Grid>)
          })}

        </Grid>


      </TabPanel>
      <TabPanel value={value} index={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
          >
            <Grid item xs={12} sm={12} md={12}>
            <SearchModal></SearchModal>
              </Grid>
            
            {episodes.map((episode) => {
              return (<Grid item xs={12} sm={6} md={4}>
                <OutlinedCard title={episode.episode+": "+episode.name} image={episode.image?episode.image:'./assets/img/unknown.jpeg'}  type={"episode"} id={episode.id} content={"Air Date: "+episode.air_date} />
              </Grid>)
            })}

          </Grid>

      </TabPanel>

    </Box>

  </>
  );

}

const mapStateToProps = state => {
  // This is the longhand of what you did
  return {
    characters: state.characters,
    episodes: state.episodes,
  };
};


//connect takes two arguments mapStateToProps and mapActionsToProps / or just an object 
export default connect(mapStateToProps, { characters, episodes })(Home);