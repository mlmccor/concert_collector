import {combineReducers} from 'redux';
import artists from './artists'
import concerts from './concerts'
import messages from './messages'

export default combineReducers({
  artists, concerts, messages
});
