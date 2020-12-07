import { usersTypes } from './usersTypes'

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
        users: action.payload,
        error: null,
      }
    case usersTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default usersReducer
