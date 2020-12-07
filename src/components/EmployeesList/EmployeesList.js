import React from 'react'
import './EmployeesList.scss'
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer'

const EmployeesList = ({ employeesList }) => {
  return (
    <section className="employees-section">
      <h2 className="employees-section__title">Employees</h2>
      <ul className="employees-list">
        {employeesList.map((item) => (
          <li key={item.letter} className="employees-list__item">
            <h4 className="employees-list__title">{item.letter}</h4>
            {!item.employees.length ? (
              <div>-----</div>
            ) : (
              <ul>
                {item.employees.map((employee) => (
                  <EmployeeContainer key={employee.id} employee={employee} />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EmployeesList
