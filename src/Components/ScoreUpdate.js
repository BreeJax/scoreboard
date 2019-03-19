import React, { Component } from "react"

class ScoreUpdate extends Component {
  render() {
    return (
      <section>
        update {this.props.teamName} score
        <button onClick={this.props.teamScoreAdd}>add 1</button>
        <button onClick={this.props.teamScoreSub}>subtract 1</button>
      </section>
    )
  }
}

export default ScoreUpdate
