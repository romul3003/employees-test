import { birthdayUsersTypes } from './birthdayUsersTypes'

const INITIAL_STATE = {
  birthdayUsers: [],
}

const birthdayUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case birthdayUsersTypes.ADD_BIRTHDAY_USER:
      return {
        ...state,
        birthdayUsers: [...state.birthdayUsers, action.payload],
      }
    case birthdayUsersTypes.REMOVE_BIRTHDAY_USER:
      return {
        ...state,
        birthdayUsers: state.birthdayUsers.filter(
          (user) => user.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export default birthdayUsersReducer
