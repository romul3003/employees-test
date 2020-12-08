export const changeCheckedUser = (users, userToCheck) => {
  return users.map((user) =>
    user.id === userToCheck.id
      ? { ...user, checked: userToCheck.checked }
      : user
  )
}

export const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat('en-Gb', options).format(date)
}
