import React from 'react'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <form className='border border-gray-300 rounded p-10 w-1/3 shadow-2xl'>
        <div className='flex flex-col my-2'>
          <label htmlFor="email">Email</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="email"
            id="email"
            placeholder='Enter email'
          />
        </div>
        <div className='flex flex-col my-2'>
          <label htmlFor="passowrd">Password</label>
          <input
            className='border border-gray-400 px-2 py-1 rounded-sm'
            type="password"
            id="passowrd"
            placeholder='Enter password'
          />
        </div>
        <button className='bg-blue-500 px-4 py-1 mt-3 text-white cursor-pointer rounded' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login