import React, { Component } from 'react'
export const ThemeContext = React.createContext()
export default class ThemeContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            isThemed:false,
            
        }
    }
    toggleTheme = ()=>{
        this.setState({
            isThemed:!this.state.isThemed
        })
    }
  render() {
      const {isThemed}=this.state
      const {toggleTheme} = this
    return (

      <ThemeContext.Provider value={{isThemed, toggleTheme}}>{this.props.children}</ThemeContext.Provider>
    )
  }
}
