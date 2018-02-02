import React, { Component } from 'react';

class TodosListItem extends Component {
  constructor(props) {
  	super(props)
	
	this.state = {
	  isEditing: false
	}
  }

  onEditClick() {
	this.setState({isEditing: true})
  }

  onCancelClick() {
	this.setState({isEditing: false})
  }

  renderTaskSection(){
    const { task, isCompleted } = this.props

	const taskStyle = {
	  color: isCompleted ? 'green' : 'red',
	  cursor: 'pointer'
	}

	return(
	  <td style={taskStyle}>{task}</td>
	)
  }

  renderActionsSection() {
  	if (!this.state.isEditing) {
	  return (
	    <td>
	      <button onClick = {() => this.onEditClick()}>Edit</button>
	      <button>Delete</button>
	    </td>
	  )
	}
	return (
	  <td>
	    <button>Save</button>
		<button onClick = {() => this.onCancelClick()}>Cancel</button>
	  </td>
	)
  }

  render() {
    return (
	  <tr>
		{this.renderTaskSection()}
		{this.renderActionsSection()}
	  </tr>
    );
  }
}

export default TodosListItem;
