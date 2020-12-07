import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/users/usersActions'
import './Employees.scss'

const Employees = ({ employees, fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return <div>Employees</div>
}

const mapStateToProps = (state) => ({
  employees: state.users.users,
})

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
