export const changeCheckedUser = (users, userToCheck) => {
  return users.map((user) =>
    user.id === userToCheck.id
      ? { ...user, checked: userToCheck.checked }
      : user
  )
}
