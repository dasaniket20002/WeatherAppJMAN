import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
            <h1 className='row-start-1 row-span-4 col-start-1 grid grid-rows-3 grid-cols-5 text-5xl font-semibold self-center text-center text-primary-txt'>
                <span className='col-start-1 col-span-4'>Stay Ahead</span>
                <span className='col-start-1 col-span-full'>of the</span>
                <span className='col-start-2 col-span-full underline'>Forecast</span>
            </h1>
            <Link to={'/register'} className=' row-start-5 col-start-1 w-full flex justify-center items-center'>
                <p className='w-min aspect-square flex justify-center items-center border-[1px] border-gray-50 bg-transparent rounded-full py-2 px-4 transition hover:scale-150'>
                    <i className='pi pi-chevron-right text-accent-txt' />
                </p>
            </Link>
    </>
  )
}

export default HomePage