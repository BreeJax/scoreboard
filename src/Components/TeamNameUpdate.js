import React, { Component } from "react"

class TeamNameUpdate extends Component {
  render() {
    return (
      <section className="team-name">
        update name of {this.props.teamName}
        <input type="text" />
        <button className={this.props.updateTeamNameClass}>Update</button>
      </section>
    )
  }
}

export default TeamNameUpdate
