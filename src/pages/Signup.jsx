import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const Signup = () => {

  const { signup } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries())

    signup(data);

    e.target.reset()

    navigate('/dashboard');

  }

  return (
    <div className='w-full mt-40 flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='border border-gray-300 rounded p-10 w-1/3 shadow-2xl'>
        <div className='flex flex-col my-2'>
          <label htmlFor="fullname">Full Name</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="text"
            id="fullname"
            name='username'
            required
            placeholder='E.g. John Doe'
          />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor="email">Email</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="email"
            id="email"
            name='email'
            required
            placeholder='E.g. john@example.com'
          />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor="passowrd">Password</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="password"
            id="passowrd"
            name='password'
            required
            placeholder='Enter password'
          />
        </div>
        <button className='bg-blue-500 px-4 py-1 mt-3 text-white cursor-pointer rounded' type='submit'>Sign up</button>
        <p className='mt-2 text-sm'>Already Registered? <Link className='text-blue-500 underline' to='/login'>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup