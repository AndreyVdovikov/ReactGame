import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      squares: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  }

clickHandler = event => {

}

render() {
  return (
    <div className= "ColorS">
      <div className= "ColorS-grid" onClick={this.clickHandler} data="0">
      {this.state.squares[0]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="1">
      {this.state.squares[1]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="2">
      {this.state.squares[2]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="3">
      {this.state.squares[3]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="4">
      {this.state.squares[4]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="5">
      {this.state.squares[5]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="6">
      {this.state.squares[6]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="7">
      {this.state.squares[7]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="8">
      {this.state.squares[8]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="9">
      {this.state.squares[9]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="10">
      {this.state.squares[10]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="11">
      {this.state.squares[11]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="12">
      {this.state.squares[12]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="13">
      {this.state.squares[13]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="14">
      {this.state.squares[14]}</div>
      <div className= "ColorS-grid" onClick={this.clickHandler} data="15">
      {this.state.squares[15]}</div>
    </div>
      );
  }


  }


export default App;
