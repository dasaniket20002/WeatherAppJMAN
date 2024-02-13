import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1 className='pt-6 row-start-1 row-span-4 col-start-1 grid md:grid-rows-3 md:grid-cols-5 text-5xl md:text-7xl gap-4 font-semibold self-center text-center text-primary-col drop-shadow-md'>
                <span className='md:col-start-1 md:col-span-4'>Stay Ahead</span>
                <span className='md:col-start-1 md:col-span-full'>of the</span>
                <span className='md:col-start-2 md:col-span-full'>Forecast <i className="pi pi-arrow-down-left" /></span>
            </h1>
            <Link to={'/register'} className='py-16 row-start-5 col-start-1 w-full flex justify-center items-center'>
                <p className='w-[4rem] aspect-square flex justify-center items-center border-[1px] border-primary-col bg-transparent rounded-full p-6 transition hover:scale-125'>
                    <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" className='absolute animate-rotate'>
                        <path
                            id="circlePath"
                            d=' M 10, 50 
                                a 40,40 0 1,1 80,0
                                40,40 0 1,1 -80,0'
                            fill='transparent'
                        />
                        <text width="1000">
                            <textPath href='#circlePath' method='stretch' className='font-bold text-[0.85rem] flex justify-between' fill='rgb(0 102 255)'>
                                Register | Login • Register | Login •
                            </textPath>
                        </text>
                    </svg>
                    <i className='pi pi-chevron-right text-primary-col absolute' />
                </p>
            </Link>
        </>
    )
}

export default HomePage