import { PureComponent } from "react";
import "./App.css";

class App extends PureComponent {
  render() {
    const currentDate = new Date();
    const firstDate = new Date(2020, 10, 11, 14, 20, 0); //Month is zero indexed

    let nextDate = firstDate;
    while (nextDate.getTime() < currentDate.getTime()) {
      nextDate.setTime(nextDate.getTime() + (6 * 60 + 40) * 60 * 1000);
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Next Bronjahm at
            <br />
            {nextDate.toLocaleString()}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
