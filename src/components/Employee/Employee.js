import React, { useState, useEffect } from 'react'
import './Employee.scss'

const Employee = ({
  employee,
  checkUser,
  addBirthdayUser,
  removeBirthdayUser,
}) => {
  const { lastName, firstName, id, checked } = employee

  const [value, setValue] = useState(checked)

  useEffect(() => {
    if (id === localStorage.getItem(id)) {
      addBirthdayUser({ ...employee, checked })
    }
  })

  const handleChange = (event) => {
    const { checked } = event.target
    checkUser(id, checked)
    if (checked) {
      addBirthdayUser({ ...employee, checked })
      localStorage.setItem(id, id)
    } else {
      removeBirthdayUser({ ...employee, checked })
      localStorage.removeItem(id)
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
