import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// eslint-disable-next-line no-unused-vars
import { logger } from "redux-logger";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
  //Comment the previous line and unccoment the next one to activate Saga Logger.
  // applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;
