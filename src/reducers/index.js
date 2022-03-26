import { combineReducers } from 'redux';
import { charactersReducers } from './charactersReducers.js';
import { characterReducers } from './characterReducers.js';
import { episodesReducers } from './episodesReducers.js';
import { episodeReducers } from './episodeReducers.js';



export default combineReducers({
    charactersReducers,
    characterReducers,
    episodesReducers,
    episodeReducers,
  });