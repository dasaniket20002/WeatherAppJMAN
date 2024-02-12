import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav className='text-sm text-accent-txt font-light row-start-1 col-start-1 px-4 py-2 w-full grid grid-cols-3'>
                <ul className='flex gap-4'>
                    <li><Link to={'#'}>About</Link></li>
                    <li><Link to={'#'}>Services</Link></li>
                </ul>
                <ul className='justify-self-center font-semibold'>
                    <li>Weather</li>
                </ul>
                <ul className='flex gap-4 justify-self-end'>
                    <li><Link to={'#'}>Contact</Link></li>
                </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Nav