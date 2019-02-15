import React, { Component } from 'react';
import './App.css';
import Home from './home.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';



class App extends Component {
  state = {
    currentPage: 'portfolio',
    contactOn: false
  }

  handleButton(i){
    if(i === this.state.currentPage)
      return
    if (i === 'contact'){
      this.setState({
        contactOn:true
      });
    }else{
    this.setState({
      currentPage: i,
      contactOn: false
    });
  }
  }


  render() {
    let partial;
    let cOn;
  if (this.state.currentPage === 'home') {
    partial = <Home />;
  } else if (this.state.currentPage === 'portfolio') {
    partial = <Portfolio />;
  }
  if (this.state.contactOn) {
    cOn = <Contact />;
  }

    return (
        <div>
        <div className="navitem">
        <button className="button button2 " onClick={() => this.handleButton('home')}> About </button>
        <button className="button button2" onClick={() => this.handleButton('portfolio')}> Portfolio </button>
        <button className="button button2" onClick={() => this.handleButton('contact')}> Contact </button>
        </div>
        {partial}
        {cOn}
        </div>
    );
  }
}

export default App;
