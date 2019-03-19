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
// <div>
//   <h1>{this.props.boardTitle}</h1>
//   <section class="score-area">
//     <section class="team1">
//       <h2>Team 1</h2>
//       <p class="team1Score">10</p>
//     </section>
//     <section class="team2">
//       <h2>Team 2</h2>
//       <p class="team2Score">10</p>
//     </section>
//   </section>
// </div>
export default TeamName
