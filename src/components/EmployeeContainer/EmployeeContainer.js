import React from 'react'
import { connect } from 'react-redux'
import Employee from '../Employee/Employee'
import { checkUser } from '../../redux/users/usersActions'

const EmployeeContainer = ({ ...props }) => {
  return <Employee {...props} />
}

const mapDispatchToProps = (dispatch) => ({
  checkUser: (id) => {
    return dispatch(checkUser(id))
  },
})

export default connect(null, mapDispatchToProps)(EmployeeContainer)
