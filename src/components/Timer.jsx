import React, { Component } from 'react'
import Signup from './Signup'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      username: '',
      password: '',
      clickable: true,
      checkbox: false
    }
  }

  validateInput = () => {
    this.setState({clickable: 
      this.state.username !== "" &&
      this.state.password !== "" && 
      this.state.checkbox !== false 
      ? false : true})
    if(this.state.username === "" || this.state.password === "") console.log("incorrect input")
    
  }

  handleChange = (event) => {
    this.setState(({[event.target.name]: event.target.value}), this.validateInput)
  }

  handleCheckbox = () => {
    this.setState(({checkbox: !this.state.checkbox }), this.validateInput)
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.state.counter < 60 &&
      this.setState(({ counter }) => ({
        counter: counter + 1
      }), () => { this.state.counter === 60 && console.log("Signup failed");
      })
    }, 1000)
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <>
          <h1>{counter === 60 && 'Unfortunately, time is up'}</h1> 
          <h1>{counter < 60 && 'Timer'}</h1>
          <h2>{counter < 60 && counter }</h2>
        </>
        <>
          {counter < 60 && <Signup 
          onChange={this.handleChange}
          onClick={this.handleCheckbox}
          clickable={this.state.clickable}
          />}
        </>
      </div>
    )
  }
}
