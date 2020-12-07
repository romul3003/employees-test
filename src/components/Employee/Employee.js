import React from 'react'
import './Employee.scss'

const Employee = ({
  employee: { lastName, firstName, checked, id },
  checkUser,
}) => {
  return (
    <li className="employee">
      <label className="employee__label">
        <span className="employee__lastname">{lastName}</span>&nbsp;
        <span className="employee__firstname">{firstName}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => checkUser(id)}
          className="employee__checkbox"
        />
      </label>
    </li>
  )
}

export default Employee
