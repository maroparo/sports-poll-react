import {
  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR,
  VOTE_GAME,
  VOTE_GAME_SUCESS,
  VOTE_GAME_ERROR,
  PICK_RANDOM_GAME
} from "./actions/types";
import produce from "immer";
import { getFromStorage } from "../utils/sotrage";
import { updateGames, pickRandomGame } from "../utils/polls";

const gamesInStorage = getFromStorage("games");
const initalState = {
  loading: false,
  error: false,
  games: gamesInStorage ? gamesInStorage : [],
  selectedGame: null
};

const reducer = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PICK_RANDOM_GAME:
        draft.selectedGame = pickRandomGame(draft.games);
        break;
      case GET_GAMES:
        draft.loading = true;
        break;
      case GET_GAMES_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.games = action.games;
        draft.selectedGame = pickRandomGame(action.games);
        break;
      case GET_GAMES_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case VOTE_GAME:
        draft.loading = true;
        break;
      case VOTE_GAME_SUCESS:
        draft.loading = false;
        draft.games = updateGames(draft.games, action.id, action.selection);
        draft.selectedGame = pickRandomGame(draft.games);
        draft.error = false;
        break;
      case VOTE_GAME_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default reducer;
