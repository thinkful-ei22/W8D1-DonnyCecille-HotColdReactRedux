import {createStore} from 'redux';
import {hotColdReducer} from './reducers';

export default createStore(hotColdReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
