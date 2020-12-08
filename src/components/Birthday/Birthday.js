import React from 'react'
import { connect } from 'react-redux'
import './Birthday.scss'

const Birthday = ({ birthdayUsers }) => {
  return (
    <section className="birthday-section">
      <h2 className="birthday-section__title">Employees birthday</h2>
    </section>
  )
}

const mapStateToProps = (state) => ({
  birthdayUsers: state.birthday.users,
})

export default connect(mapStateToProps)(Birthday)
