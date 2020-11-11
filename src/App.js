import { PureComponent } from "react";
import "./App.css";

class App extends PureComponent {
  render() {
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    const currentDate = new Date();
    const firstDate = new Date(2020, 10, 11, 14, 20, 0); //Month is zero indexed
    const shadowlandsDate = new Date(2020, 10, 24, 10, 0, 0);

    let nextDate = firstDate;
    while (nextDate.getTime() < currentDate.getTime()) {
      nextDate.setTime(nextDate.getTime() + (6 * 60 + 40) * 60 * 1000);
    }

    return shadowlandsDate.getTime() < currentDate.getTime() ? (
      <div className="App">
        <header className="App-header">
          <p>Go play Shadowlands!</p>
        </header>
      </div>
    ) : (
      <div className="App">
        <header className="App-header">
          <p>
            Next{" "}
            <a href="https://www.wowhead.com/npc=174058/bronjahm">Bronjahm</a>{" "}
            at
            <br />
            {nextDate.toLocaleString("en-US", options)}
            <br />
            <div className={"coords"}>(70.6, 38.6)</div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
