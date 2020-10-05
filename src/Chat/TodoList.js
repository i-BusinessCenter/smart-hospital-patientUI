import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {

  render() {
    const messages = this.props.messages.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )

    return(
      <div id="Chat">
        {messages}
      </div>
    );
  }
}

export default TodoList