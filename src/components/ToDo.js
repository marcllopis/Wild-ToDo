import React, { Component } from 'react';
import List from './List';

class ToDo extends Component {

  state = {
    categoryList: ['Coding','Sports','Food','Extra','All'],
    singleTodo: '',
    todoChosenCategory: 'Coding',
    filteredCategory: 'All',
    listOfToDos: []
  }

  writeToDo = event => {
    this.setState({
      singleTodo: event.target.value
    })
  }

  handleCategory = event => {
    this.setState({
      todoChosenCategory: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();

    let todoWithCategory = {
      todo: this.state.singleTodo,
      category: this.state.todoChosenCategory
    }

    this.setState({
      singleTodo: '',
      listOfToDos: [...this.state.listOfToDos, todoWithCategory]
    })
  }

  deleteToDo = event => {
    let copyToDos = [...this.state.listOfToDos]
    copyToDos.splice(event.target.id, 1)
    this.setState({
      listOfToDos: copyToDos
    })
  }

  selectFilter = event => {
    this.setState({
      filteredCategory: event.target.innerText
    })
  }

  render() {
    let filteredCategories = this.state.listOfToDos.filter(todo => (
      todo.category === this.state.filteredCategory
    ));

    let filteredTodos = this.state.filteredCategory === 'All'
      ? this.state.listOfToDos
      : filteredCategories

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
          <select onChange={this.handleCategory}>
            <option value="Coding">Coding</option>
            <option value="Sports">Sports</option>
            <option value="Food">Food</option>
            <option value="Extra">Extra</option>
          </select>
          <button>Add to the list</button>
        </form>
        {
          this.state.listOfToDos.length > 0
            ?
            <div className="flex-it">
              <div className="todos-container">
                {
                  filteredTodos.length > 0
                  ? <List listArray={filteredTodos} deleteToDo={this.deleteToDo} />
                  : <p>You have no tasks related to: {this.state.filteredCategory}</p>
                }
              </div>
              <div className="filter-container">
                <h1>Filter it</h1>
                <hr />
                {
                  this.state.categoryList.map((category, index) =>(
                    <p key={index} onClick={this.selectFilter} className="filter-text">{category}</p>
                  ))
                }
              </div>
            </div>
            : <h3>You have nothing to do</h3>
        }
      </div>
    );
  }
}



export default ToDo;