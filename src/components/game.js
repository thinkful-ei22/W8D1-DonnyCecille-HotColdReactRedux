import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import './game.css';

export default class Game extends React.Component{
    
    constructor(props){
        super(props);


        this.state={
           
            guessArray : [],
            feedback : "Take a Guess!",
            answer: Math.floor(Math.random()*101),

        }
    }


    //game logic
    updateGameState(userGuess){
        
        
         if(isNaN(userGuess)){

            alert('You entered NOT A NUMBER');

            return;
         } 

         //check if duplicate number

         if(this.state.guessArray.includes(userGuess)){

            alert('You entered this number already!');

            return;
         }


        
        
         //calculate the absolute differnce between our guess and our answer


        const diff = Math.abs(parseInt(userGuess) -this.state.answer);

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

        this.setState({
            guessArray : [ ...this.state.guessArray, userGuess],
            feedback
        })


    }



    newGame(){
        this.setState({
            guessArray : [],
            feedback : "Take a Guess!",
            answer: Math.floor(Math.random()*101),
        })
    }





    render(){
        return (
            <div>
                <Header handleNewGame={()=>this.newGame()}/>
                <div className="game">
                <GuessSection feedback={this.state.feedback} handleGuess={userGuess => this.updateGameState(userGuess)} />
                <GuessCount count={this.state.guessArray.length} />
                <GuessList guesses={this.state.guessArray} />
                </div>
            </div>
        );
    }
}

