import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photoReducer from './reducers/photoReducer';

export default combineReducers({
    photoReducer: photoReducer,
    routing: routerReducer
});
