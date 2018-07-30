'use strict';
//ACTIONS


//START NEW GAME

export const NEW_GAME = 'NEW_GAME';

export const newGame = () => ({
    type: NEW_GAME,
    
});



//ENTER GUESS
export const ENTER_GUESS = 'ENTER_GUESS';

export const enterGuess = userGuess => ({
    type: ENTER_GUESS,
    userGuess 
});

//WHAT INFO

//export const ABOUT_INFO = 'ABOUT_INFO';

export const ABOUT_INFO = 'ABOUT_INFO';

export const aboutInfo = displayInfo => ({
    type: ABOUT_INFO,
    displayInfo
});