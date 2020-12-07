import React from 'react'
import { connect } from 'react-redux'
import Employee from '../Employee/Employee'
import { checkUser } from '../../redux/users/usersActions'
import {
  addBirthdayUser,
  removeBirthdayUser,
} from '../../redux/birthdayUsers/birthdayUsersActions'

const EmployeeContainer = (props) => {
  return <Employee {...props} />
}

const mapDispatchToProps = (dispatch) => ({
  checkUser: (id, checked) => dispatch(checkUser(id, checked)),
  addBirthdayUser: (user) => dispatch(addBirthdayUser(user)),
  removeBirthdayUser: (user) => dispatch(removeBirthdayUser(user)),
})

export default connect(null, mapDispatchToProps)(EmployeeContainer)
