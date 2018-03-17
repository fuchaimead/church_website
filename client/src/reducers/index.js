import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import images from './images';

const rootReducer = combineReducers({
  user,
  flash, 
  images
});

export default rootReducer;
