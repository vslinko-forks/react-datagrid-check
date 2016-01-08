import * as types from '../constants/ActionTypes';

export function keyUpdate({val, rowId}) {
  return { type: types.KEY_UPDATE, val, rowId };
}
