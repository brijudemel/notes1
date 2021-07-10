import {createStore, combineReducers} from 'redux';
import noteReducer from './reducers/noteReducer';

const rootReducer = combineReducers({
  noteReducer: noteReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
