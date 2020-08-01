import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.DisplayDataHandler();
  }

  DisplayDataHandler = () => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data in covidTracker");
        this.setState({
          countries: data,
          isLoading: false,
        });
      });
  };

  findCountry = (name) => {
    return this.state.countries.find((v) => v.country === name);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => <Countries countries={this.state.countries} />}
          />

          <Route
            path="/:country"
            render={(props) => (
              <Country {...props} findCountry={this.findCountry} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
