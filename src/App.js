import React, { Component } from 'react';
import BarChart from './Components/BarChart'

class App extends Component {
    constructor(){
        super();
        this.state = {
            data:[1000,400,232,200,233,120,78,162,390,20]
        }
    }

  render() {
    return (
      <div className="App">
             <BarChart data={this.state.data}/>

      </div>
    );
  }
}

export default App;
