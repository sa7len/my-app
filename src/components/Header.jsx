import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header  className='header' >
    <ul>
        <li><Link to="/" target='_blank'>Home</Link></li>
        <li><Link to="/Login" target='_blank'>Login</Link></li>
        <li><Link to="/Register" target='_blank'>Register</Link></li>
        <li><Link to="/Products" target='_blank'>Products</Link></li>
    </ul>
</header>
  )
}

export default Header