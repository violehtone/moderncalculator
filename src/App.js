import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      var1: '',
      var2: '',
      var3: '',
      result: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : parseInt(event.target.value) })
  }

  calculate = (event) => {
    event.preventDefault()
    const sum = this.state.var1 + this.state.var2 + this.state.var3
    this.setState({ result: sum })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
        </header>
        <p className="App-intro"> Input numbers </p>
        <p> result is: {this.state.result} </p>
        <form onSubmit={this.calculate}>
          <div> var1: <input type="number" name="var1" value={this.state.var1} onChange={this.handleChange}></input> </div>
          <div> var2: <input type="number" name="var2" value={this.state.var2} onChange={this.handleChange}></input> </div>
          <div> var3: <input type="number" name="var3" value={this.state.var3} onChange={this.handleChange}></input> </div>
          <button type="submit"> calculate </button>
        </form>
      </div>
    );
  }
}

export default App;
