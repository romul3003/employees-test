import React from 'react'
import { formatDate } from '../../redux/users/utils'

const BirthdayUser = ({ user }) => {
  return (
    <li>
      {user.lastName} {user.firstName} - {formatDate(user.dob)}
    </li>
  )
}

export default BirthdayUser
