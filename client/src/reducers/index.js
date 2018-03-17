import { combineReducers } from 'redux';
import user from './user';
import announcements from './announcements'
import flash from './flash';
import images from './images';

const rootReducer = combineReducers({
  user,
  flash, 
  images,
  announcements
});

export default rootReducer;
