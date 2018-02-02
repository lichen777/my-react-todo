import React, { Component } from 'react';
import TodosListHeader from './TodosListHeader'
import TodosListItem from './TodosListItem'

class TodosList extends Component {
  renderItems() {
  	return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} />)
  }

  render() {
    return (
      <table>
		<thead>
		  <TodosListHeader />
		</thead>
		<tbody>
		  {this.renderItems()}
		</tbody>
	  </table>
    );
  }
}

export default TodosList;
