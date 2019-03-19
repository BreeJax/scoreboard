import React, { Component } from "react"

class TeamName extends Component {
  render() {
    return (
      <section className={this.props.team}>
        <h2>{this.props.teamName}</h2>
        <p className={this.props.teamScore}>{this.props.score}</p>
      </section>
    )
  }
}

export default TeamName
