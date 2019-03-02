import {
  API_GET,
} from '../constants/actionTypes';

const initialState = {
  band: null,
};

export const apiItem = (state = initialState, action) => {
  switch (action.type) {
    case API_GET:
      return {
        ...state,
        ...{band: action.payload},
      };

    default:
      return state;
  }
};
