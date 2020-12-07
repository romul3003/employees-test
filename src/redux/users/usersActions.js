import { usersTypes } from './usersTypes'

export const fetchUsersStart = () => ({
  type: usersTypes.FETCH_USERS_START,
})

export const fetchUsersSuccess = (users) => ({
  type: usersTypes.FETCH_USERS_START,
  payload: users,
})

export const fetchUsersFailure = (error) => ({
  type: usersTypes.FETCH_USERS_FAILURE,
  payload: error,
})

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersStart())
    const response = await fetch(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    )
    // eslint-disable-next-line no-console
    console.log(response)
  } catch (error) {
    dispatch(fetchUsersFailure(error))
  }
}
