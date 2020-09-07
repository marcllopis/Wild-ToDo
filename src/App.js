import React, { Component } from 'react';

import ToDo from './components/ToDo';
import Main from './components/Main'

import './App.css'


class App extends Component {

  state = {
    showToDoPage: false,
    toDoTitle: 'Wild ToDo List'
  }

  goToDoPage = () => (
    this.setState({
      showToDoPage: true
    })
  )

  render() {
    return (
      <div>
        {
          this.state.showToDoPage
            ? <ToDo title={this.state.toDoTitle}/>
            : <Main action={this.goToDoPage} />
        }
      </div>
    );
  }
}

export default App;