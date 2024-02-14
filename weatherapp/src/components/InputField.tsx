import React from 'react'

const InputField = (props: { fieldType: string, fieldID: string, fieldName: string, value: string, setterFunction: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <span className='relative w-full grid input_box'>
            <input
                type={props.fieldType}
                id={props.fieldID}
                placeholder={''}
                value={props.value}
                onChange={(e) => { props.setterFunction(e.target.value) }}
                autoComplete='off'
                required
                className='w-full py-2 px-2 border-[1px] bg-card-transp-white border-b-black focus:border-b-primary-col rounded outline-none peer shadow-md transition focus:shadow-xl backdrop-blur-md' />
            <label htmlFor={props.fieldID} className='absolute py-2 px-2 text-black font-medium pointer-events-none transition-all peer-focus:-translate-y-7 peer-focus:text-sm'>{props.fieldName}</label>
        </span>
    )
}

export default InputField