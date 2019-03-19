import React, { Component } from "react"

class Mainboard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.boardTitle}</h1>
      </div>
    )
  }
}

export default Mainboard
