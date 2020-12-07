import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__info">
        <h1 className="homepage__title">
          Hello there! This is just an empty Homepage. Nothing is here
        </h1>
        <span>
          Click&nbsp;
          <Link to="/employees" style={{ textDecoration: 'underline' }}>
            here
          </Link>
          &nbsp;to see employees page
        </span>
      </div>
    </div>
  )
}

export default HomePage
