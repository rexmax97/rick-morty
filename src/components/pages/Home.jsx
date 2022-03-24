import React from "react";
import { SearchModal, TitlebarImageList, TabPanel,ImgMediaCard } from "../shared";
import { useEffect, useState } from "react";
import { connect, useSelector} from 'react-redux';
import { characters, episodes } from "../../actions";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { createSelector} from 'redux';
const Home=(props)=> {
  /* const [characters, setCharacters] = useState(0) */
  const [value, setValue] = useState(0);
  const characters = useSelector((state) => state.charactersReducers.characters)
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    useEffect( () => {
    
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
       {/*  <SearchModal></SearchModal> */}
       <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Personajes" {...a11yProps(0)} />
              <Tab label="Episodios" {...a11yProps(1)} />
            </Tabs>
          </Box>

      
          <TabPanel value={value} index={0} component={'div'}>
           
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {characters.map((character)=>{
              return  (<Grid item xs={6}>
                     
                    </Grid>)
                    })}
    
          </Grid>
           
        
          </TabPanel>
          <TabPanel value={value} index={1}>
        
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
export default connect(mapStateToProps,{characters, episodes})(Home);