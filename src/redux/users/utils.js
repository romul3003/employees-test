export const changeCheckedUser = (users, userIdToCheck) => {
  return users.map((user) =>
    user.id === userIdToCheck ? { ...user, checked: !user.checked } : user
  )
}
