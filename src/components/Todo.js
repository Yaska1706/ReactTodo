import React, { Component } from 'react';
import todoitem from './todoitem';
class Todo extends Component {
  render() {
    return this.props.todo.map((todos) =>(
    <h3>{ todos.title }</h3>
    ));
  }
}

export default Todo;
