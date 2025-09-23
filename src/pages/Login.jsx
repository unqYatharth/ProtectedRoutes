import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate()
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const success = login(data);

    if (!success) {
      setError('Inavalid Credentials')
    } else {
      navigate('/dashboard');
    }

  }

  return (
    <div className='w-full mt-40 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='border border-gray-300 rounded p-10 w-1/3 shadow-2xl'>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex flex-col my-2'>
          <label htmlFor="email">Email</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="email"
            id="email"
            name='email'
            required
            placeholder='Enter email'
          />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor="password">Password</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="password"
            id="password"
            name='password'
            required
            placeholder='Enter password'
          />
        </div>
        <button className='bg-blue-500 px-4 py-1 mt-3 text-white cursor-pointer rounded' type='submit'>Login</button>
        <p className='mt-2 text-sm'>Don't have an account? <Link className='text-blue-500 underline' to='/signup'>Singup</Link></p>
      </form>
    </div>
  )
}

export default Login