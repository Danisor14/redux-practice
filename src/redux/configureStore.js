import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxInmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnchancers(applyMiddleware(reduxInmutableStateInvariant))
  );
}
