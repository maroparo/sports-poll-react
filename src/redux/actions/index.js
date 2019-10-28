import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  VOTE_GAME,
  VOTE_GAME_SUCESS,
  VOTE_GAME_ERROR,
  PICK_RANDOM_GAME
} from "./types";

export const getGames = () => ({
  type: GET_GAMES
});

export const getGamesSuccess = games => ({
  type: GET_GAMES_SUCCESS,
  games
});

export const getGamesError = message => ({
  type: GET_GAMES_ERROR,
  message
});

export const voteGame = (id, selection) => ({
  type: VOTE_GAME,
  id,
  selection
});

export const voteGameSuccess = (id, selection) => ({
  type: VOTE_GAME_SUCESS,
  id,
  selection
});

export const voteGameError = (id, message) => ({
  type: VOTE_GAME_ERROR,
  id,
  message
});

export const pickRandomGame = () => ({
  type: PICK_RANDOM_GAME
});
