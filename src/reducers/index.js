import { NEW_GAME, ENTER_GUESS, ABOUT_INFO  } from '../actions';

const initialState = {

    guessArray : [23],
    feedback : "Take a Guess!",
    answer: Math.floor(Math.random()*101),
    displayInfo: false


};


export const hotColdReducer = (state=initialState, action ) => {
    // Add code which handles each action here
    if (action.type === ENTER_GUESS) {

        console.log(action.userGuess);
        console.log('STATE ANSWER' + state.answer);
         
        let userGuess = action.userGuess;

        if(isNaN(userGuess)){

            alert('You entered NOT A NUMBER');

            return;
         } 

         //check if duplicate number

         if(state.guessArray.includes(userGuess)){

            alert('You entered this number already!');

            return;
         }

         //calculate the absolute differnce between our guess and our answer


        const diff = Math.abs(parseInt(userGuess) - state.answer);

        let feedback;

        if(diff > 50){ 
            feedback = 'You are Ice Cold';
        }
        else if(diff  > 25){

            feedback = 'You are cold';
        }

        else if(diff > 10){

            feedback = 'You are lukewarm'
        }
        else if(diff > 2){

            feedback = 'You are warm'
        }
        else if(diff <= 2){

            feedback = 'You are hot'
        } 
        else if(diff === 0){
            feedback = 'You are WINNER! '
        }

        return Object.assign({}, state, {
            feedback,
            guessArray: [...state.guessArray, userGuess]

        })

        // this.setState({
        //     guessArray : [ ...this.state.guessArray, userGuess],
        //     feedback
        // })

    }

    if (action.type === NEW_GAME){
        return Object.assign({}, state, {

            guessArray : [],
            feedback : "Take a Guess!",
            answer: Math.floor(Math.random()*101),
            displayInfo:false


        });
    }

    if(action.type === ABOUT_INFO){
        return Object.assign({}, state, {

            displayInfo: action.displayInfo

        });
            
    }


    return state;

};