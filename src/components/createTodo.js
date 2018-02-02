import React, { Component } from 'react';

class NewTodo extends Component {
  handleCreate(event) {
    event.preventDefault()
	//console.log(this.refs.createInput.value)
	this.props.createTask(this.refs.createInput.value)
	this.refs.createInput.value = ''
  }

  render() {
    return (
	  <form onSubmit={this.handleCreate.bind(this)}>
		<input type='text' placeholder='What do you want to do next?' ref='createInput' />
		<button>Create</button>
	  </form>
    );
  }
}

export default NewTodo;
