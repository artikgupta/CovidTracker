import React from "react";
import { Link } from "react-router-dom";

function Countries(props) {
  const { countries } = props;
  console.log(props);
  return (
    <div className="countries">
      {countries.sort().map((country) => {
        return (
          <div className="display-country" key={country.country}>
            <Link to={`/${country.country}`} className="link">
              {country.country}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
