import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/users/usersActions'
import './EmployeesPage.scss'
import EmployeesList from '../../components/EmployeesList/EmployeesList'

const EmployeesPage = ({ employees, fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()

  if (!employees) {
    return null
  }

  const employeesList = alphabet.split('').map((letter) => {
    return {
      letter: letter,
      employees: employees.filter(
        (employee) => employee.lastName.indexOf(letter) === 0
      ),
    }
  })

  // eslint-disable-next-line no-console
  console.log(employeesList)

  return (
    <div className="employees">
      <EmployeesList employeesList={employeesList} />
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
