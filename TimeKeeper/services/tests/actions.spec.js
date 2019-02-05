import isEqual from 'lodash.isequal';

import { updateReduxTime } from '../actions';
import { UPDATE_TIME } from'../constants';

describe('updateReduxTime', () => {
  it('should return correct action', () => {
    const time = new Date("2018-01-01").toISOString();
    const expectedResult = {
      type: UPDATE_TIME,
      time
    };
    const response = updateReduxTime(time);
    expect(isEqual(response, expectedResult)).toBe(true);
  });
});