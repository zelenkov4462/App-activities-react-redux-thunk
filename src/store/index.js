import { applyMiddleware, combineReducers, createStore } from "redux";
import { cardFavoriteReducer } from "../redux/CardFavoriteReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { isLoadingReducer } from "../redux/isLoadingReducer";
import { cardsReducer } from "../redux/CardsReducer";
import { nextReducer } from "../redux/NextReducer";

const rootReducer = combineReducers({
  favoriteCards: cardFavoriteReducer,
  isLoading: isLoadingReducer,
  cards: cardsReducer,
  isRandom: nextReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
