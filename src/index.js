import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';


import './reset.css';
import './index.css';

import Game from './components/game';

import { newGame, enterGuess  } from './actions';

console.log('testing');
//store.dispatch(enterGuess("23"));
//store.dispatch(enterGuess("66"));
//store.dispatch(enterGuess("12"));
console.log(store.getState());

ReactDOM.render(
   <Provider store={store} >
     <Game />
   </Provider>,
    document.getElementById('root')
);

