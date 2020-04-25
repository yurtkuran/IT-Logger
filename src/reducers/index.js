import { combineReducers } from 'redux';

// bring in reducers
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
    log: logReducer,
    tech: techReducer,
});
