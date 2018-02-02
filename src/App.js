import React, { Component } from 'react';
import TodosList from './components/TodosList'
import NewTodo from './components/createTodo'
import './App.css';

const todos = [
  {
	task: 'make react tutorial',
	isCompleted: true
  }, 
  {
	task: 'make react app',
	isCompleted: true
  }
]

class App extends Component {
  constructor(props) {
  	super(props)
	this.state = {
	  todos
	}
  }

  createTask(newTask){
    this.state.todos.push({
	  task: newTask,
	  isCompleted: false
	})
	this.setState({todos: this.state.todos})
  }

  render() {
    return (
      <div className="App">
		<h1>React ToDos App</h1>
		<NewTodo createTask={this.createTask.bind(this)}/>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
