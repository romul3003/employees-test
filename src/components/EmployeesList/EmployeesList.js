import React from 'react'
import './EmployeesList.scss'
import EmployeeContainer from '../EmployeeContainer/EmployeeContainer'
import { fetchUsers } from '../../redux/users/usersActions'
import { connect } from 'react-redux'

const EmployeesList = ({ employees }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const alphabetMapEmployees = (letter) => ({
    letter: letter,
    employees: employees.filter(
      (employee) => employee.lastName.indexOf(letter) === 0
    ),
  })

  const jsxMapEmployees = (item) => (
    <li key={item.letter} className="employees-list__item">
      <h4 className="employees-list__title">{item.letter}</h4>
      {!item.employees.length ? (
        <div className="employees-list__no-data">-----</div>
      ) : (
        <ul>
          {item.employees.map((employee) => (
            <EmployeeContainer key={employee.id} employee={employee} />
          ))}
        </ul>
      )}
    </li>
  )

  const employeesList = employees
    ? alphabet.split('').map(alphabetMapEmployees).map(jsxMapEmployees)
    : null

  return (
    <section className="employees-section">
      <h2 className="employees-section__title">Employees</h2>
      <ul className="employees-list">{employeesList}</ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  employees: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList)
