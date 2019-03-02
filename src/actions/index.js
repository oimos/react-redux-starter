import {
  SET_DEFAULT,
  INCREMENT,
  DECREMENT,
  API_GET,
} from '../constants/actionTypes';

export const defaultAction = () => (
  {
    type: SET_DEFAULT,
    count: 0,
  }
);

export const incrementAction = (count = 0) => (
  {
    type: INCREMENT,
    count: count + 10,
  }
);

export const decrementAction = (count = 0) => (
  {
    type: DECREMENT,
    count: count - 10,
  }
);

export const getApiContent = (url) => dispatch => {
  fetch(url)
    .then(data => data.json())
    .then(json => {
      dispatch(dummyApiCallAction(json))
    }).catch(error => error)
  };

export const dummyApiCallAction = (payload) => (
  {
    type: API_GET,
    payload,
  }
);
