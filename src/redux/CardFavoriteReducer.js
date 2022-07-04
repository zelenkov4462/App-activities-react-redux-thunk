const defaltState = {
  favoriteCards: [],
};
const ADD_FAVORITE_CARD = "ADD_FAVORITE_CARD";
const REMOVE_FAVORITE_CARD = "REMOVE_FAVORITE_CARD";

export const cardFavoriteReducer = (state = defaltState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_CARD:
      return { state, favoriteCards: [...state.favoriteCards, action.payload] };

    case REMOVE_FAVORITE_CARD:
      return {
        ...state,
        favoriteCards: state.favoriteCards.filter(
          (card) => card.key !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addFavoriteCardAction = (payload) => ({
  type: ADD_FAVORITE_CARD,
  payload,
});

export const removeFavoriteCardAction = (payload) => ({
  type: REMOVE_FAVORITE_CARD,
  payload,
});
