import { combineReducers } from 'redux';
import explorerReducer from './explorer';
import { filesReducer } from './files';

const rootReducer = combineReducers({
    explorer: explorerReducer,
    files: filesReducer
})

export default rootReducer;