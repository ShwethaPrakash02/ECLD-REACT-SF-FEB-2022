import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import './Todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
      isEdit: false,
    };
  }

  render() {
    const handleChange = (e) => {
      console.log(e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
    const handleAdd = () => {
      if(this.state.value === ''){
        alert("Add atleast one task")
      } else{

      
      this.setState({
        list: [
          ...this.state.list,
          {
            id: uuidv4(),
            task: this.state.value,
          },
        ],
        value: "",
        isEdit: false
      });
    }
    };
    const handleEdit = (id) => {
      const newList = this.state.list.filter((e) => e.id !== id);
      const selectedItem = this.state.list.find((e) => e.id === id);
      this.setState({
        list: newList,
        value: selectedItem.task,
        id: id,
        isEdit: true,
      });
    };
    const handleDelete = (id) => {
      const newList = this.state.list.filter((e) => e.id !== id);
      this.setState({
        list: newList,
      });
    };
    const handleToggle = (e)=>{
      const element = e.target
      element.classList.toggle("crossed-line")
    }
    return (
      <div className="todo-container">
        <h1>To Do App</h1>
        <input placeholder="Add a todo" type="text" onChange={handleChange} value={this.state.value} />
        <button className="todo-add" onClick={handleAdd}>
          {this.state.isEdit ? "Edit" : "Add task"}
        </button>
        {this.state.list.map((item) => {
          return (
            <div className="todo-div" onClick={handleToggle}>
              {item.task}
              <button
                className="fa fa-trash"
                onClick={() => handleDelete(item.id)}
              ></button>
              <button
                className="fa fa-edit"
                onClick={() => handleEdit(item.id)}
              ></button>
            </div>
          );
        })}
      </div>
    );
  }
}
