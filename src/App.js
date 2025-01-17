import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {isChecked: false, testCheck: ''};
    this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
  }
  handleChecked () {

    if (this.state.isChecked) {
        this.setState({testCheck:''});
    }else{
        this.setState({testCheck: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})
    }
    this.setState({isChecked: !this.state.isChecked});

  }
  render() {
    
    return (
      <div className="wrapper">
        <label><input type="checkbox"  onChange={ this.handleChecked }/> Mostrar información importante</label>
        {this.state.isChecked && (<p>{this.state.testCheck}</p>)}
      </div>
    );
  }
}

export default App;


