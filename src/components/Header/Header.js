import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" exact>
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" exact className="header__nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees" className="header__nav-link">
              Employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
