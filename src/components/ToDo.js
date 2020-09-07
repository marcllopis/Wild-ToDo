import React, { Component } from 'react';


class ToDo extends Component {

  state = {
    hello: 'hey',
    singleTodo: '',
    listOfToDos: []
  }

  writeToDo = event => {
    this.setState({
      singleTodo: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    // console.log(this.state.singleTodo)
    // let currentToDo = this.state.singleTodo
    // let newListOfToDos = this.state.listOfToDos
    // newListOfToDos.push(currentToDo)
    this.setState({
      singleTodo: '',
      listOfToDos: [...this.state.listOfToDos, this.state.singleTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <br />
        <form onSubmit={this.addTodo}>
          <input
            value={this.state.singleTodo}
            onChange={this.writeToDo}
            placeholder='Write a ToDo...'
          />
          <button>Add to the list</button>
        </form>
        {
          this.state.listOfToDos.length > 0
            ?
            <div>
              {
                this.state.listOfToDos.map((todo, index) =>
                  <p key={index}>- You have to {todo} <button>Delete</button></p>
                )
              }
            </div>
            : <h3>You have nothing to do</h3>
        }
      </div>
    );
  }
}

export default ToDo;