import { usersTypes } from './usersTypes'
import { changeCheckedUser } from './utils'

const INITIAL_STATE = {
  users: null,
  loading: false,
  error: null,
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_START:
      return {
        ...state,
        loading: true,
      }
    case usersTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.map((user) => ({
          ...user,
          checked: false,
        })),
        error: null,
      }
    case usersTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case usersTypes.CHECK_USER:
      return {
        ...state,
        users: changeCheckedUser(state.users, action.payload),
      }
    default:
      return state
  }
}

export default usersReducer
