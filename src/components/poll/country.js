import React from "react";
import PropTypes from "prop-types";

function countryFlag(country) {
  let countryISO;
  switch (country) {
    case "ENGLAND":
      countryISO = "gb";
      break;
    case "FRANCE":
      countryISO = "fr";
      break;
    default:
      countryISO = "se";
  }
  return countryISO;
}

function CountrySection(props) {
  return (
    <>
      <small className="country-label">Championship:</small>
      <div className="country-container">
        <div className={`country-flag`} title={props.country}>
          <i className={`flag-icon flag-icon-${countryFlag(props.country)}`} />
        </div>
        <div className="country-championship"> {props.group}</div>
      </div>
    </>
  );
}

CountrySection.propTypes = {
  country: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired
};

export default CountrySection;
