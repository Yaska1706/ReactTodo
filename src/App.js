import React, { Component } from 'react';
import Todo from './components/Todo'
import './App.css';

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Morning run',
        completed: false
      },
      {
        id: 2,
        title: 'Take breko',
        completed: false
      },
      {
        id: 3,
        title: 'Code sprint',
        completed: false
      },
      {
        id: 4,
        title: 'Nature walk',
        completed: false
      },
      {
        id: 5,
        title: 'playing fifa',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
 