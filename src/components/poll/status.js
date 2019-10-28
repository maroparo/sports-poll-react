import React from "react";
import PropTypes from "prop-types";

function StatusSection(props) {
  let status;
  let pointerClassName;
  switch (props.status) {
    case "NOT_STARTED":
      status = "Scheduled";
      pointerClassName = "status-scheduled";
      break;
    case "STARTED":
      status = "Playing Now";
      pointerClassName = "status-playing";
      break;
    default:
      status = "Played";
      pointerClassName = "status-played";
  }

  return (
    <div className="status-container">
      <div className="status">
        {" "}
        <span className={pointerClassName}></span> {status}
      </div>
    </div>
  );
}

StatusSection.propTypes = {
  status: PropTypes.string.isRequired
};

export default StatusSection;
