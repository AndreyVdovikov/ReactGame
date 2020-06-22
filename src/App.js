import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      squares:Array(16).fill(null),//ЗАПЯТАЯ БЛИН111


    }
  }
  onClick = e => {
     const index = +e.target.dataset.index;
     this.setState(({ squares }) => ({
       squares: squares.map((n, i) => i === index && !n
         ? [ 'red', 'black' ][+(Math.random() < 0.7)]
         : n
       ),
     }));
   }

   render() {
     return (
       <div className="ColorS">
         {this.state.squares.map((n, i) => (
           <div
             className="ColorS-grid"
             style={n ? { background: n } : null}
             data-index={i}
             onClick={this.onClick}
           />
         ))}
       </div>
     );
   }
 }

export default App;
