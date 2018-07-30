import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';
import {connect} from 'react-redux';
import {enterGuess,newGame,aboutInfo} from '../actions';
import './game.css';

class Game extends React.Component{
    
   

    // newGame(){
    //     // this.setState({
    //     //     guessArray : [],
    //     //     feedback : "Take a Guess!",
    //     //     answer: Math.floor(Math.random()*101),
    //     // })
    // }


    render(){
       
        if(!this.props.displayInfo){ 
            return (
            <div>
                <Header handleDisplayInfo={()=>this.props.dispatch(aboutInfo(true))} handleNewGame={()=>this.props.dispatch(newGame(true))}/>
                <div className="game">
                <GuessSection feedback={this.props.feedback} handleGuess={userGuess => this.props.dispatch(enterGuess(userGuess))} />
                <GuessCount count={this.props.guessArray.length} />
                <GuessList guesses={this.props.guessArray} />
                </div>
            </div>
            );
        } else{
            return(
                <div>
                    <InfoModal handleDisplayNone={()=>this.props.dispatch(aboutInfo(false))} />
                </div>
             );   
      
        }
       
    }
}




export const mapStateToProps = state =>({
     guessArray : state.guessArray,
     feedback : state.feedback ,
     answer: state.answer,
     displayInfo: state.displayInfo

});

export default connect(mapStateToProps)(Game);
