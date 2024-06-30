import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { HiMenu } from "react-icons/hi";
import logo from '../../assets/imgs/connected-in-faith-logo.png'

const NavBar = () => {
  return (
    <>
    <div className="navbar-container">
      <NavLink to="/">
       <img
       src={logo} alt="logo"
       className="navbar-logo"></img>
      </NavLink>
      <ul className="poppins-light">
        <NavLink to="/blog">
        <li className='nav-list-link'>Blog</li>
        </NavLink>
        <NavLink to="/aboutCIF">
        <li className='nav-list-link'>About CIF</li>
        </NavLink>
        <NavLink to="/videos">
        <li className='nav-list-link'>Videos</li>
        </NavLink>
        <NavLink to="/donate">
        <li className='nav-list-link'>Donate</li>
        </NavLink>
      </ul>
      <div className="navbar-icon">
        {/* TODO: DROP DOWN MENU */}
      <HiMenu size={36}/>
      </div>
    </div>
    </> 
  )
}

export default NavBar