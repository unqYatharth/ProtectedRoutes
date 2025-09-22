import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className='w-full p-5 flex justify-between items-center bg-gray-400'>
      <div className='flex gap-3'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      {
        user ?
          <div className='flex gap-3'>
            <p>Hey, {user.username}</p>
            <button onClick={logout} className='bg-red-500 rounded text-white px-3 py-1 hover:bg-red-600 cursor-pointer'>Logout</button>
          </div> :
          <div className='flex gap-3'>
            <Link to='/signup'>Singup</Link>
            <Link to='/login'>Login</Link>
          </div>
      }
    </nav>
  )
}

export default Navbar