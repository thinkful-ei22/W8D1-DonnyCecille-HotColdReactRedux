'use strict';
//ACTIONS


//START NEW GAME

export const NEW_GAME = 'NEW_GAME';

export const newGame = start => ({
    type: NEW_GAME,
    start
});



//ENTER GUESS
export const ENTER_GUESS = 'ENTER_GUESS';

export const enterGuess = userGuess => ({
    type: ENTER_GUESS,
    userGuess : "23"
});

//WHAT INFO

//export const ABOUT_INFO = 'ABOUT_INFO';

export const ABOUT_INFO = 'ABOUT_INFO';

export const aboutInfo = display => ({
    type: NEW_GAME,
    display
});