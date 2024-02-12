import React, { useState } from 'react'

const InputField = (props: { fieldType: string, fieldID: string, fieldName: string, value: string, setterFunction: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <span className='w-full grid'>
                        <input 
                            type={props.fieldType} 
                            id={props.fieldID}
                            //placeholder={props.fieldName}
                            value={props.value}
                            onChange={(e) => { props.setterFunction(e.target.value) }}
                            autoComplete='off'
                            className='w-full col-start-1 row-start-1 py-1 px-2 border-[1px] border-black rounded'/>
                        <label htmlFor={props.fieldID} className='col-start-1 row-start-1 py-1 px-2 text-black font-medium pointer-events-none'>{props.fieldName}</label>
        </span>
  )
}

export default InputField