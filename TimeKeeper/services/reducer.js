/**
 * TimeKeeper reducer
 */

import { UPDATE_TIME } from './constants';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return time;
    default:
      return state;
  }
}
