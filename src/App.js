import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';
import Circles from './components/Circles';

class App extends Component {
  state = {
    circles: [1, 2, 3, 4]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector circles={this.circles} />
          <Circles circles={this.circles} />
        </main>
      </div>
    );
  }
}

export default App;