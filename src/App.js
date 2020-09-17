import React, {Component} from 'react'
import Heart from './Heart'


import './App.css';

class App extends Component {

  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="app">
        <Heart full={false} />
      </div>
    )
  }
}

export default App;
