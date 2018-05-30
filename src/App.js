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
    this.setState({ result: sum,
                    var1: '',
                    var2: '',
                    var3: ''
                  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
        </header>
        <p className="App-intro"> Input numbers </p>
        <div className="result">
          <p> result is: {this.state.result} </p>
        </div>
        <form className = "inputForm" onSubmit={this.calculate}>
          var1: <div> <input className="inputField" type="number" name="var1" value={this.state.var1} onChange={this.handleChange}></input> </div>
          var2: <div> <input className="inputField" type="number" name="var2" value={this.state.var2} onChange={this.handleChange}></input> </div>
          var3: <div> <input className="inputField" type="number" name="var3" value={this.state.var3} onChange={this.handleChange}></input> </div>
          <button className="submitButton" type="submit"> calculate </button>
        </form>
      </div>
    );
  }
}

export default App;
