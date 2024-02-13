import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <nav className='text-sm h-min text-primary-col font-medium row-start-1 col-start-1 col-span-full px-4 py-2 w-full grid grid-cols-3'>
                <ul className='flex flex-col md:flex-row gap-4'>
                    <li><Link to={'#'}>About</Link></li>
                    <li><Link to={'#'}>Services</Link></li>
                </ul>
                <ul className='justify-self-center flex flex-col items-center font-semibold'>
                    <li>Weather</li>
                    <li><i className='pi pi-cloud' /></li>
                </ul>
                <ul className='flex flex-col md:flex-row gap-4 justify-self-end'>
                    <li><Link to={'#'}>Log&nbsp;out</Link></li>
                    <li><Link to={'#'}>Contact</Link></li>
                </ul>
            </nav>

            {/* {
                props.imgDisplay === 'off' ? <></> : 
                <img src={`${process.env.PUBLIC_URL}/assets/drizzle.svg`} alt="" className='absolute right-[50%] top-[10%] col-span-full row-span-full w-96 m-auto drop-shadow-md' />
            } */}
            <Outlet />
        </>
    )
}

export default LandingPage