import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../components/Home";
import Home2 from "../../components/Home2";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          {/* display Home at default path as of now */}{" "}
          <main>
            <Route exact path="/" component={Home2} />{" "}
            <Route exact path="/home" component={Home2} />{" "}
          </main>{" "}
        </div>
      </Router>
    );
  }
}

export default App;
