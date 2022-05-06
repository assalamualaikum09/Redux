import React, { Component } from 'react'
import JumbotronComponent from './Components/JumbotronComponent'
import NavbarComponent from './Components/NavbarComponents'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
         
      </div>
    )
  }
}
