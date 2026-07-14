import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <div>NavigationBar</div>
      <div className="">
        <Link className='nav-item' to="/AddTeam">Add Team</Link>
        <Link className='nav-item' to="/ViewTeam">View Team</Link>
      </div>
    </>
  )
}

export default NavigationBar