import { birthdayTypes } from './birthdayTypes'

export const addBirthdayUser = (user) => ({
  type: birthdayTypes.ADD_BIRTHDAY_USER,
  payload: user,
})

export const removeBirthdayUser = (user) => ({
  type: birthdayTypes.REMOVE_BIRTHDAY_USER,
  payload: user,
})
