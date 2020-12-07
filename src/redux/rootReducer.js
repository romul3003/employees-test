import { combineReducers } from 'redux'
import usersReducer from './users/usersReducer'
import birthdayUsersReducer from './birthdayUsers/birthdayUsersReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  birthdayUsers: birthdayUsersReducer,
})

export default rootReducer
