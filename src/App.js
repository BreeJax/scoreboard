import React, { Component } from "react"
import Mainboard from "./Components/Mainboard"
import TeamName from "./Components/TeamName"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Mainboard boardTitle="My Score Board" />
          <section className="score-area">
            <TeamName teamName="Team 1" team="team1" score="10" teamScore="team1Score" />
            <TeamName teamName="Team 2" team="team2" score="10" teamScore="team2Score" />
          </section>
          <section className="update-score">
            <section className="team1">
              <section className="team-name">
                update team 1 name
                <input type="text" />
                <button className="update-team-1-name">Update</button>
              </section>
              <section>
                update team 1 score
                <button className="team-1-add-1-button">add 1</button>
                <button className="team-1-subtract-1-button">subtract 1</button>
              </section>
            </section>
            <section className="team2">
              <section className="team-name">
                update team 2 name
                <input type="text" />
                <button>Update</button>
              </section>
              <section>
                update team 2 score
                <button>add 1</button>
                <button>subtract 1</button>
              </section>
            </section>
          </section>
          <script src="/main.js" charset="utf-8" />
        </header>
      </div>
    )
  }
}

export default App
