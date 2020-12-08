import React from 'react'
import './BirthdayList.scss'
import { months } from '../../constants'
import BirthdayUser from '../BirthdayUser/BirthdayUser'

const BirthdayList = ({ birthdayUsers }) => {
  const sortUsersByMonth = (month, idx) => ({
    month,
    users: birthdayUsers.filter(
      (user) => new Date(user.dob).getMonth() === idx
    ),
  })

  const getUsersMarkup = (birthday, idx) => {
    return birthday.users.length ? (
      <li key={idx} className="birthday-list__month">
        <h4 className="birthday-list__name">{birthday.month}:</h4>
        <ul>
          {birthday.users.map((user) => {
            return <BirthdayUser key={user.id} user={user} />
          })}
        </ul>
      </li>
    ) : null
  }

  const users = birthdayUsers.length ? (
    months.map(sortUsersByMonth).map(getUsersMarkup)
  ) : (
    <li>
      <h3 className="birthday-list__title">No selected employees</h3>
    </li>
  )

  return <ul className="birthday-list">{users}</ul>
}

export default BirthdayList
