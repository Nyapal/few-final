import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = (props) => {
  return (
    <div className="landingPage">
      <button>
        <Link to="/home" className="nav-link"> Enter </Link>
      </button>
    </div>
  )
}

export default LandingPage