import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';
import { aboutInfo } from '../actions';

export default function Header(props){
    
    console.log('MY PROPS' + props.handleDisplayInfo);
    // constructor(props){
    //     super(props);

    //     // this.state={

    //     //     styles: { display: 'none' }

    //     // }


    // }
    
      
            return (
                <header>
                    <TopNav handleDisplayInfo={props.handleDisplayInfo} handleNewGame={props.handleNewGame} />
                    <h1>HOT or COLD</h1>
                </header>
            );
        
};
