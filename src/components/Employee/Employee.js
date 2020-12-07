import React from 'react'
import './Employee.scss'

const Employee = ({ employee: { lastName, firstName } }) => {
  return (
    <li className="employee">
      <label>
        <span className="employee__lastname">{lastName}</span>&nbsp;
        <span className="employee__firstname">{firstName}</span>
        <input type="checkbox" className="employee__checkbox" />
      </label>
    </li>
  )
}

export default Employee
