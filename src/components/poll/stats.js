import React from "react";
import PropTypes from "prop-types";
import { getVoteStats } from "../../utils/polls";
function StatsSection(props) {
  const voteStats = getVoteStats(props.game);
  return (
    <div className="stats-container">
      <div className="stats-home" onClick={() => props.onPollClick(props.game.id, 1)}>
        <span className="stats-title">{props.game.homeName}</span>
        <span className="stats-votes">{voteStats.home}</span>
        <span className="stats-odds">{props.game.odds.home}</span>
      </div>
      <div className="stats-draw" onClick={() => props.onPollClick(props.game.id, 0)}>
        <span className="stats-title">Draw</span>
        <span className="stats-votes">{voteStats.draw}</span>
        <span className="stats-odds">{props.game.odds.draw}</span>
      </div>
      <div className="stats-away" onClick={() => props.onPollClick(props.game.id, 2)}>
        <span className="stats-title">{props.game.awayName}</span>
        <span className="stats-votes">{voteStats.away}</span>
        <span className="stats-odds">{props.game.odds.away}</span>
      </div>
    </div>
  );
}

StatsSection.propTypes = {
  game: PropTypes.object.isRequired,
  onPollClick: PropTypes.func.isRequired
};

export default StatsSection;
