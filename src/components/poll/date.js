import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

function DateSection(props) {
  return (
    <div className="date-container">
      <span className="date-title">
        {moment(props.date).format("HH:mm, DD MMM YYYY")}
      </span>
    </div>
  );
}

DateSection.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateSection;
