import React, { Component } from "react"

class ScoreUpdate extends Component {
  render() {
    return (
      <section>
        update {this.props.teamName} score
        <button>add 1</button>
        <button>subtract 1</button>
      </section>
    )
  }
}

export default ScoreUpdate
