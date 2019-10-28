import { getFromStorage } from "../utils/sotrage";

export const vote = (id, selection) => {
  let gamesInStorage = getFromStorage("games");
  if (gamesInStorage) {
    const updatedGamesInStorage = updateGames(gamesInStorage, id, selection);
    localStorage.setItem("games", JSON.stringify(updatedGamesInStorage));
    return true;
  } else {
    return false;
  }
};

export const updateGames = (games, id, selection) => {
  let voteKey;

  switch (selection) {
    case 0:
      voteKey = "draw";
      break;
    case 1:
      voteKey = "home";
      break;
    default:
      voteKey = "away";
  }

  games.map(game => {
    if (game.id === id) {
      game.votes[voteKey] = game.votes[voteKey] + 1;
      return {
        ...game,
        votes: {
          ...game.votes,
          [voteKey]: game.votes[voteKey] + 1
        }
      };
    }
    return game;
  });

  return games;
};

export const pickRandomGame = games => {
  return games[Math.floor(Math.random() * games.length)];
};

export const getVoteStats = game => {
  const totalVotes = game.votes.home + game.votes.draw + game.votes.away;
  const home = ((game.votes.home * 100) / totalVotes).toFixed(1);
  const draw = ((game.votes.draw * 100) / totalVotes).toFixed(1);
  const away = ((game.votes.away * 100) / totalVotes).toFixed(1);
  return {
    home: `Votes: ${isNaN(home) ? 0 : home}% (${game.votes.home})`,
    draw: `${isNaN(draw) ? 0 : draw}% (${game.votes.draw})`,
    away: `Votes: ${isNaN(away) ? 0 : away}% (${game.votes.away})`
  };
};

export const sportName = type => {
  let sport;
  switch (type) {
    case "FOOTBALL":
      sport = "Football";
      break;
    case "SNOOKER":
      sport = "Snooker";
      break;
    case "HANDBALL":
      sport = "Handball";
      break;
    case "ICE_HOCKEY":
      sport = "Ice Hockey";
      break;
    default:
      sport = "Tennis";
  }

  return sport;
};
