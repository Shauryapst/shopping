import { combineReducers } from 'redux';
import sliderReducer from './sliderReducer';

const rootReducer = combineReducers({
  slider: sliderReducer,
  // other reducers...
});

export default rootReducer;