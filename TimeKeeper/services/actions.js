/**
 * TimeKeeper actions
 */

import { UPDATE_TIME } from './constants';

export function updateReduxTime(time) {
  return {
    type: UPDATE_TIME,
    time
  };
}
