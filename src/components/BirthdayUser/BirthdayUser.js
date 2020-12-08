import React from 'react'
import { formatDate } from '../../redux/users/utils'
import './BirthdayUser.scss'

const BirthdayUser = ({ user }) => {
  return (
    <li className="birthday-user">
      {user.lastName} {user.firstName} - {formatDate(user.dob)}
    </li>
  )
}

export default BirthdayUser
