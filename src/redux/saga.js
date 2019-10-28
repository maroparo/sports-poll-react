import { GET_GAMES, VOTE_GAME } from "./actions/types";
import axios from "axios";
import { put, takeLatest, all } from "redux-saga/effects";
import {
  getGamesSuccess,
  getGamesError,
  voteGameSuccess,
  voteGameError
} from "./actions";
import { putInStorage, getFromStorage } from "../utils/sotrage";
import { vote } from "../utils/polls";

function* fetchGames() {
  //Simulating an API request to get the game results.
  let errorMessage = null;
  const results = yield axios
    .get("games.json")
    .then(response => response.data)
    .catch(err => {
      errorMessage = err.message;
    });
  if (errorMessage) {
    yield put(getGamesError(errorMessage));
  } else {
    if (!getFromStorage("games")) {
      //We generate the random odds, decimals with one decimal point from 1 - 10.
      let gamesWithOdds = results.map(game => ({
        ...game,
        odds: {
          home: Math.round((Math.random() * 10 + 1) * 10) / 10,
          draw: Math.round((Math.random() * 10 + 1) * 10) / 10,
          away: Math.round((Math.random() * 10 + 1) * 10) / 10
        },
        votes: {
          home: 0,
          draw: 0,
          away: 0
        }
      }));

      putInStorage("games", gamesWithOdds);
      yield put(getGamesSuccess(gamesWithOdds));
    }
  }
}

function* voteOnGame(action) {
  const voted = vote(action.id, action.selection);
  if (voted) {
    yield put(voteGameSuccess(action.id, action.selection));
  } else {
    yield put(voteGameError(action.id, "Game not found!"));
  }
}

function* actionWatcher() {
  yield takeLatest(GET_GAMES, fetchGames);
  yield takeLatest(VOTE_GAME, voteOnGame);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
