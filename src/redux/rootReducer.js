import { combineReducers } from 'redux'
import usersReducer from './users/usersReducer'
import birthdayReducer from './birthday/birthdayReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  birthday: birthdayReducer,
})

export default rootReducer
