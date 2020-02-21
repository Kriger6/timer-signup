import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <form>
        <input onChange={this.props.onChange} type="text" name="username" placeholder="username"/>
        <input onChange={this.props.onChange} type="password" name="password" placeholder="password"/>
        <input onClick={this.props.onClick} type="checkbox" name="checkbox" id="checkbox"/>
        <label htmlFor="checkbox">I agree...</label>
        <button disabled={this.props.clickable} type="submit" value="submit">Signup</button>
      </form>
    )
  }
}
