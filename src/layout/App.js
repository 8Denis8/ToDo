import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      todoInput: 'abc',

    };
  }

  addTodo() {
    console.log('Click');

    const todoList = this.state.todoList;
    todoList.push(this.state.todoInput);

    this.setState({
      todoList,
    });
  }

  render() {
    // console.log(this.state.todoList);

    return (
      <div>

        <input
          type="text"
          value={this.state.todoInput}
          onChange={e => this.setState({ todoInput: e.target.value })}
        />
        <button onClick={() => this.addTodo()}>Add</button>

        <ul>
          {
            this.state.todoList.map(el => <li key={el}>{el}</li>)
          }
        </ul>

      </div>
    );
  }
}

export default App;
