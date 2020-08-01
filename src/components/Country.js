import React, { Component } from "react";
import Countries from "./Countries";

class Country extends Component {
  // console.log(props);
  constructor(props) {
    super(props);

    this.state = {
      country: {},
    };
  }

  componentDidMount() {
    const countryName = this.props.match.params.country;
    const country = this.props.findCountry(countryName);
    this.setState({
      country: country,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.country.active}</h1>
      </div>
    );
  }
}

export default Country;
