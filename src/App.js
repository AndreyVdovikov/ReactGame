import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      squares:Array(15).fill(null),//ЗАПЯТАЯ БЛИН111
      count: 0 // значение счетчика

    }
  }

clickHandler = event => {
//console.log(1);
// data - номер квадрата по которому кликают
let data = event.target.getAttribute('data');
let currentScuares = this.state.squares;
console.log(currentScuares);
  //проверка
  if (currentScuares[data] === null){
  // выбор что добавлять счетчик четный или не четный
  currentScuares[data] = (this.state.count % 2 === 0) ? 'X':'O';
  // увеличение счетчика
  this.setState({ count: this.state.count + 1});
  // текущиц квадратик
  this.setState({ scuares:currentScuares});
  }
  else {
    alert ('Так нельзя');
  }
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
