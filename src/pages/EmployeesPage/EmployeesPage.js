import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/users/usersActions'
import './EmployeesPage.scss'

const EmployeesPage = ({ employees, fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if (!employees) {
    return null
  }

  const employeesList = alphabet
    .toUpperCase()
    .split('')
    .map((letter, idx) =>
      employees.filter((employee) => employee.lastName.indexOf(letter) === 0)
    )

  return (
    <div className="employees">
      <section className="employees-section">
        <h2 className="employees-section__title">Employees</h2>
        <ul className="employees-list">
          {employeesList.map((item, idx) => {
            return (
              <li key={idx}>
                <h4>{alphabet[idx++].toUpperCase()}</h4>
                {!item.length ? (
                  <div>-----</div>
                ) : (
                  <ul>
                    {item.map((person) => {
                      return (
                        <li key={person.id}>
                          {person.lastName} {person.firstName}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </section>
      <section className="birthday-section">
        <h2 className="birthday-section__title">Employees birthday</h2>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  employees: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage)
