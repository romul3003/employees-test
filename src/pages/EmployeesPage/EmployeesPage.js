import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/users/usersActions'
import './EmployeesPage.scss'
import EmployeesList from '../../components/EmployeesList/EmployeesList'
import Birthday from '../../components/Birthday/Birthday'

const EmployeesPage = ({ fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return (
    <div className="employees">
      <EmployeesList />
      <Birthday />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchUsers()),
})

export default connect(null, mapDispatchToProps)(EmployeesPage)
