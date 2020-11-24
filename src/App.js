import './App.css';
import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: [
      {username: '420blazeit'},
      {username: 'ILoveDix'},
      {username: 'Billy420'}
    ]
  }

  inputChangedHandler = (event) => {
    this.setState({
      username: [
        {username: '420blazeit'},
        {username: event.target.value},
        {username: 'Billy420'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.inputChangedHandler} username={this.state.username[1].username}/>
        <UserOutput username={this.state.username[0].username}/>
        <UserOutput username={this.state.username[1].username}/>
        <UserOutput username={this.state.username[1].username}/>
      </div>
    );
  }

}

export default App;
