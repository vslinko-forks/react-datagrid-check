import { KEY_UPDATE } from '../constants/ActionTypes'

export default function reducer(state = '', action) {

  switch (action.type) {
    case KEY_UPDATE:
      return action.grid;

    default:
      return state
  }
}
