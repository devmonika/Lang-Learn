
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  
  
  const signOut = () =>{
    logOut()
    .then( ()=>{

    })
    .catch(error => console.error(error))
  }

  
    return (
     
        <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='text-black'><Link to="/">Home</Link></li>
              <li className='text-black'><Link to="/courses">Courses</Link></li>
              <li className='text-black'><Link to="/faq">FAQ</Link></li>
              <li className='text-black'><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Lang-Learn</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          <li className='text-white'><Link to="/">Home</Link></li>
          <li className='text-white'><Link to="/courses">Courses</Link></li>
              <li className='text-white'><Link to="/faq">FAQ</Link></li>
              <li className='text-white'><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="">{
            user?.uid ?
            <div className='flex justify-between items-center'>
              <span className='mx-2 text-white'>{user?.displayName}</span>
              
              <span title={user?.displayName}><img className='rounded h-10 mr-2' src={user?.photoURL} alt=''/></span> 
              <span><button onClick={signOut} className='btn'>Log Out</button></span>
            </div>
            :
            <>
              <Link to="/login"><button className='btn btn-primary mx-2'>Login</button></Link>
            </>
          }</Link>
          

          
        </div>
      </div>
      
  
    );
};

export default Header;