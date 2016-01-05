import * as types from '../constants/ActionTypes'

export function keyUpdate(grid) {
  return { type: types.KEY_UPDATE, grid }
}
