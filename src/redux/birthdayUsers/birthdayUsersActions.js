import { birthdayUsersTypes } from './birthdayUsersTypes'

export const addBirthdayUser = (user) => ({
  type: birthdayUsersTypes.ADD_BIRTHDAY_USER,
  payload: user,
})

export const removeBirthdayUser = (user) => ({
  type: birthdayUsersTypes.REMOVE_BIRTHDAY_USER,
  payload: user,
})
