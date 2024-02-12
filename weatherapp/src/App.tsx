import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
        

function App() {

    const [isLogin, setLogin] = useState<boolean>(false);

  return (
    <div className="App">
        <nav className='p-5 mb-5'>
            <img src="" alt="" />
            <h1 className='text-3xl font-semibold text-center'>Weather App</h1>
        </nav>
        { isLogin ? 
            <div className="container flex flex-col items-center justify-center w-1/2 m-auto gap-2 ">
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="name" className='col-start-1 py-1 px-2'>Name</label>
                    <input type="text" id='name' placeholder='Name' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                </span>
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="email" className='col-start-1 py-1 px-2'>Email</label>
                    <input type="email" id='email' placeholder='Email' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                </span>
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="password" className='col-start-1 py-1 px-2'>Password</label>
                    <input type="password" id='password' placeholder='Password' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                </span>
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="zip" className='col-start-1 py-1 px-2'>Zip Code</label>
                    <input type="number" id='zip' placeholder='Zip Code' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded' />
                </span>
                <section className='flex items-center self-end px-4 mt-2 gap-4'>
                    <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Register</button>
                    <p> or </p>
                    <button className='text-blue-700 underline' onClick={() => {
                        setLogin(!isLogin);
                    }}>Login</button>
                </section>
            </div>
            :
            <div className="container flex flex-col items-center justify-center w-1/2 m-auto gap-2 ">
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="email" className='col-start-1 py-1 px-2'>Email</label>
                    <input type="email" id='email' placeholder='Email' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                </span>
                <span className='w-full grid grid-cols-6 gap-1'>
                    <label htmlFor="password" className='col-start-1 py-1 px-2'>Password</label>
                    <input type="password" id='password' placeholder='Password' className='col-span-full col-start-2 py-1 px-2 border-[1px] border-black rounded'/>
                </span>
                <section className='flex items-center self-end px-4 mt-2 gap-4'>
                    <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Login</button>
                    <p> or </p>
                    <button className='text-blue-700 underline' onClick={() => {
                        setLogin(!isLogin);
                    }}>Register</button>
                </section>
            </div>
        }
    </div>
  );
}

export default App;
