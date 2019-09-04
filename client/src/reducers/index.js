import {combineReducers} from 'redux';
import artists from './artists'
import concerts from './concerts'

export default combineReducers({
  artists, concerts
});
