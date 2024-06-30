import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { HiMenu } from "react-icons/hi";
import logo from '../../assets/connected-in-faith-logo.png'

const NavBar = () => {
  return (
    <>
    <div className="navbar-container">
      <NavLink to="/">
       <img
       src={logo} alt="logo"
       className="navbar-logo"></img>
      </NavLink>
      <ul>
        <NavLink to="/blog">
        <li className='nav-list-link'>Blog</li>
        </NavLink>
        <NavLink to="/aboutCIF">
        <li className='nav-list-link'>About CIF</li>
        </NavLink>
        <NavLink to="/videos">
        <li className='nav-list-link'>Videos</li>
        </NavLink>
      </ul>
      <div className="navbar-icon">
      <HiMenu size={36}/>
      </div>
    </div>
    </> 
  )
}

export default NavBar