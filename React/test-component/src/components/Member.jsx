import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props){
        super(props)
        this.state={
           name:''
        }
    }
    handleChange = ()=>{
        this.setState({
            name:props.name
        })
    }
   
  render() {
    return (
      <div>
        <button onClick={this.handleChange}>1</button>
      </div>
    );
  }
}
