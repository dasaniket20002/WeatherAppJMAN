import { useState } from "react";
import InputField from "./InputField";

const RegisterPage = () => {
    const [isLogin, setLogin] = useState<boolean>(false);

    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');

    const [regPasswordValue, setRegPasswordValue] = useState<string>('');
    const [loginPasswordValue, setLoginPasswordValue] = useState<string>('');

    const [zipValue, setZipValue] = useState<string>('');

    const toggleIsLogin = () => { setLogin(!isLogin); }
    const clearInputFields = () => { 
        setNameValue('');
        setEmailValue('');
        setRegPasswordValue('');
        setLoginPasswordValue('');
        setZipValue('');
     }

    return (
        <>
            { isLogin ? 
                <div className="container flex flex-col items-center justify-center md:w-1/2 px-4 m-auto gap-8 text-primary-txt">
                    <InputField 
                        fieldType={"text"}
                        fieldID={"name"}
                        fieldName={"Name"}
                        value={nameValue}
                        setterFunction={setNameValue}
                    />
                    <InputField 
                        fieldType={"email"}
                        fieldID={"email"}
                        fieldName={"Email"}
                        value={emailValue}
                        setterFunction={setEmailValue}
                    />
                    <InputField 
                        fieldType={"password"}
                        fieldID={"password"}
                        fieldName={"Password"}
                        value={regPasswordValue}
                        setterFunction={setRegPasswordValue}
                    />
                    <InputField 
                        fieldType={"number"}
                        fieldID={"number"}
                        fieldName={"Zip Code"}
                        value={zipValue ? zipValue.toString(): ''}
                        setterFunction={setZipValue}
                    />
                    <section className='flex items-center self-end px-4 mt-2 gap-4'>
                        <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Register</button>
                        <p> or </p>
                        <button className='text-blue-700 underline' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Login</button>
                    </section>
                </div>
                :
                <div className="container flex flex-col items-center justify-center w-1/2 m-auto gap-2 ">
                    <InputField 
                        fieldType={"email"}
                        fieldID={"email"}
                        fieldName={"Email"}
                        value={emailValue}
                        setterFunction={setEmailValue}
                    />
                    <InputField 
                        fieldType={"password"}
                        fieldID={"password"}
                        fieldName={"Password"}
                        value={loginPasswordValue}
                        setterFunction={setLoginPasswordValue}
                    />
                    <section className='flex items-center self-end px-4 mt-2 gap-4'>
                        <button className='w-min border-[1px] border-gray-50 bg-gray-400 rounded py-2 px-4'>Login</button>
                        <p> or </p>
                        <button className='text-blue-700 underline' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Register</button>
                    </section>
                </div>
            }
        </>
    );
}

export default RegisterPage