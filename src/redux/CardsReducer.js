const defaultState = {
  cards: {},
};

const GET_CARD = "GET_CARD";
const GET_TYPE_CARD = "GET_TYPE_CARD";

export const cardsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CARD:
      return { ...state, cards: action.payload };
    case GET_TYPE_CARD:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export const getCard = (payload) => ({ type: GET_CARD, payload });
export const getTypeCard = (payload) => ({ type: GET_TYPE_CARD, payload });
