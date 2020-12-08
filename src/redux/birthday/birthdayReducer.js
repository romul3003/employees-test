import { birthdayTypes } from './birthdayTypes'

const INITIAL_STATE = {
  users: [],
}

const birthdayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case birthdayTypes.ADD_BIRTHDAY_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case birthdayTypes.REMOVE_BIRTHDAY_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default birthdayReducer
