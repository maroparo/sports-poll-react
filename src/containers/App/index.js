import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { connect } from "react-redux";
import { getGames, voteGame, pickRandomGame } from "../../redux/actions";
import { getFromStorage } from "../../utils/sotrage";
import { sportName } from "../../utils/polls";

import CountrySection from "../../components/poll/country";
import StatusSection from "../../components/poll/status";
import StatsSection from "../../components/poll/stats";
import DateSection from "../../components/poll/date";
import Background from "../../components/poll/background";

class App extends Component {
  componentDidMount() {
    if (!getFromStorage("games")) {
      this.props.getGames();
    } else {
      this.props.pickRandomGame();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.selectedGame !== nextProps.selectedGame;
  }

  displayGameInfo() {
    const game = this.props.selectedGame;
    return game ? (
      <>
        <h2>
          Click on the odds to share your prediction for this
          {sportName(game.sport)} match.
        </h2>
        <CountrySection country={game.country} group={game.group} />
        <StatusSection status={game.state} />
        <StatsSection onPollClick={this.onPollOptionClick} game={game} />
        <DateSection date={game.createdAt} />
      </>
    ) : null;
  }

  onPollOptionClick = (id, selection) => {
    this.props.voteGame(id, selection);
  };

  render() {
    let background = this.props.selectedGame ? (
      <Background sport={this.props.selectedGame.sport} />
    ) : null;
    return (
      <>
        {background}
        <div className="container">{this.displayGameInfo()}</div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games,
  selectedGame: state.selectedGame
});

const mapDispatchToProps = dispatch => ({
  getGames: () => dispatch(getGames()),
  voteGame: (id, selection) => dispatch(voteGame(id, selection)),
  pickRandomGame: () => dispatch(pickRandomGame()),
  dispatch
});

App.propTypes = {
  games: PropTypes.array.isRequired,
  selectedGame: PropTypes.object,
  getGames: PropTypes.func.isRequired,
  pickRandomGame: PropTypes.func.isRequired,
  voteGame: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
