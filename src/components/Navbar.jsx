import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Lottie from 'lottie-react';
import { useTheme } from '../provider/ThemeProvider';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
   const { isDark } = useTheme();
  const {user,logOut} = use(AuthContext)
  const handleLogout =()=>{
    logOut()
  }
  
    return (
       <div className={`
      sticky top-0 z-50 transition-all duration-300
      ${isDark 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
      } 
      border-b shadow-sm
    `}>
            <div className="navbar bg-amber-100 shadow-sm gap-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/'>Home</NavLink>
        <li>
          <NavLink to='/all-groups'>All Groups</NavLink>
          
        </li>
        <NavLink to='/createGroup'>Create Groups</NavLink>
        <NavLink to='/mygroups/'>My Groups</NavLink>
      </ul>
    </div>
    <img src="https://i.postimg.cc/Gmnrph3m/hobby-logo.jpg" className='w-[90px] h-20 hidden md:block lg:block' alt="" />
    <NavLink to='/' onClick="window.scrollTo({ top: 0, behavior: 'Smooth' })"className="btn btn-ghost text-md md:text-xl">Hobby-Hub</NavLink>
  </div>
  <div className="flex items-center space-x-4">
            <ThemeToggle />
            </div>
  <div className="navbar-center hidden lg:flex gap-3">
    <ul className="menu menu-horizontal px-1">
      <NavLink to='/' className={({ isActive }) =>
    isActive
      ? "bg-amber-300 p-2 mx-3 rounded-xl": "text-gray-700"}>Home</NavLink>
      <NavLink to='/all-groups'
        
           className={({ isActive }) =>
    isActive
      ? "bg-amber-300 p-3 mx-3 rounded-xl": "text-gray-700"}>All Groups
         
      </NavLink>
      <NavLink to='/mygroups'  className={({ isActive }) =>
    isActive
      ? "bg-amber-300 p-2 rounded-xl": "text-gray-700 mx-3"}>My Groups</NavLink>
      <NavLink  to='/createGroup' className={({ isActive }) =>
    isActive
      ? "bg-amber-300 p-2 rounded-xl": "text-gray-700"}>Create Groups</NavLink>
    </ul>
  </div>
   
  <div className="navbar-end flex gap-3 md:block lg:block lg:relative lg:left-52">
    <div  className='flex'>
    <img src={`${user? user.photoURL: "https://i.postimg.cc/kX7NwdCw/ppp-logo.png"}` } className='w-[50px] h-[40px] rounded-4xl' title={user?.displayName} alt="" />
    <br/>
    <Lottie></Lottie>
      {user && user.name}
    
   {user ? (<NavLink to='/login' onClick={handleLogout} className="btn btn-primary">LogOut</NavLink>): ( <NavLink to="/login" className="btn btn-primary">Login</NavLink>)}
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;