import React, { useState } from 'react'
import './Employee.scss'

const Employee = ({
  employee,
  checkUser,
  addBirthdayUser,
  removeBirthdayUser,
}) => {
  const { lastName, firstName, id } = employee

  const [value, setValue] = useState(false)

  const handleChange = (event) => {
    const { checked } = event.target
    checkUser(id, checked)
    if (checked) {
      addBirthdayUser({ ...employee, checked })
    } else {
      removeBirthdayUser({ ...employee, checked })
    }

    setValue(event.target.checked)
  }

  return (
    <li className="employee">
      <label className="employee__label">
        <span className="employee__lastname">{lastName}</span>&nbsp;
        <span className="employee__firstname">{firstName}</span>
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
          className="employee__checkbox"
        />
      </label>
    </li>
  )
}

export default Employee
