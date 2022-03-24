import { combineReducers } from 'redux';
import { charactersReducers } from './charactersReducers.js';
import { episodesReducers } from './episodesReducers.js';



export default combineReducers({
    charactersReducers,
    episodesReducers
  });