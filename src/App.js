import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

const circles = [1, 2, 3, 4];

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
    };
  }

  getInitialState() {
    return {
      circles: [1, 2, 3, 4],
      selectedCircleIdx: 0
    }
  }

  handleCircleSelection = (circleIdx) => {
    this.setState({selectedCircleIdx: circleIdx});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            circles={this.state.circles} 
            selectedCircleIdx={this.state.selectedCircleIdx}
            handleCircleSelection={this.handleCircleSelection} 
          />
          <Circles 
            circles={this.state.circles}             
            selectedCircleIdx={this.state.selectedCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;