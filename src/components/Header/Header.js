import React, { Fragment } from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <Fragment>
        <div className='header'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
            <ul>
               <Link className='menulist' to='/'>Home</Link>
               <Link className='menulist' to='/courses'>Courses</Link>
            </ul>
        </div>
    </Fragment>
  )
}

export default Header