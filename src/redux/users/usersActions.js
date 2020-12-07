import { usersTypes } from './usersTypes'

export const fetchUsersStart = () => ({
  type: usersTypes.FETCH_USERS_START,
})

export const fetchUsersSuccess = (users) => ({
  type: usersTypes.FETCH_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersFailure = (errorMessage) => {
  return {
    type: usersTypes.FETCH_USERS_FAILURE,
    payload: errorMessage,
  }
}

export const checkUser = (id) => {
  return {
    type: usersTypes.CHECK_USER,
    payload: id,
  }
}

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersStart())
    const response = await fetch(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    )
    const users = await response.json()
    dispatch(fetchUsersSuccess(users))
  } catch (error) {
    dispatch(fetchUsersFailure(error.message))
  }
}
