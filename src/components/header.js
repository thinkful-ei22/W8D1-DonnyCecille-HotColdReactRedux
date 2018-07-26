import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component{
    
    constructor(props){
        super(props);

        this.state={

            styles: { display: 'none' }

        }


    }
    
        render(){ 
            return (
                <header>
                    <TopNav handleModal={ ()=> {this.setState({styles: { }})}} handleNewGame={this.props.handleNewGame} />
                     { <InfoModal styles={this.state.styles} handleModal={()=> {this.setState({styles: { display:'none'}})}}  />} 
                    <h1>HOT or COLD</h1>
                </header>
            );
        }
};
