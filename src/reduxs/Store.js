import { createStore } from 'redux';
import BoReducer from './BoReducers';

const store = createStore(BoReducer)

export default store;