import React, { Component } from "react"
import Mainboard from "./Components/Mainboard"
import TeamName from "./Components/TeamName"
import TeamNameUpdate from "./Components/TeamNameUpdate"
import ScoreUpdate from "./Components/ScoreUpdate"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team1Name: "Team 1",
      team2Name: "Team 2",
      team1Score: 0,
      team2Score: 0
    }
  }

  updateTeam1ScoreAdd = () => {
    let newScore1 = this.state.team1Score + 1
    this.setState({ team1Score: newScore1 })
  }
  updateTeam1ScoreSubtract = () => {
    let newScoreNeg1 = this.state.team1Score - 1
    this.setState({ team1Score: newScoreNeg1 })
  }

  updateTeam2ScoreAdd = () => {
    let newScore2 = this.state.team2Score + 1
    this.setState({ team2Score: newScore2 })
  }

  updateTeam2ScoreSubtract = () => {
    console.log("here ya go!!")
    let newScoreNeg2 = this.state.team2Score - 1
    this.setState({ team2Score: newScoreNeg2 })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mainboard boardTitle="My Score Board" />
          <section className="score-area">
            <TeamName
              teamName={this.state.team1Name}
              team="team1"
              score={this.state.team1Score}
              teamScore="team1Score"
            />
            <TeamName
              teamName={this.state.team2Name}
              team="team2"
              score={this.state.team2Score}
              teamScore="team2Score"
            />
          </section>
          <section className="update-score">
            <section className="team1">
              <TeamNameUpdate teamName={this.state.team1Name} updateTeamNameClass="update-team-1-name" />
              <ScoreUpdate
                teamName={this.state.team1Name}
                teamScoreAdd={this.updateTeam1ScoreAdd}
                teamScoreSub={this.updateTeam1ScoreSubtract}
              />
            </section>
            <section className="team2">
              <TeamNameUpdate teamName={this.state.team2Name} updateTeamNameClass="update-team-2-name" />
              <ScoreUpdate
                teamName={this.state.team2Name}
                teamScoreAdd={this.updateTeam2ScoreAdd}
                teamScoreSub={this.updateTeam2ScoreSubtract}
              />
            </section>
          </section>
          <script src="/main.js" charset="utf-8" />
        </header>
      </div>
    )
  }
}

export default App
