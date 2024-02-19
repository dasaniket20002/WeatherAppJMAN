// import neccesssary framworks and functions
import { useState } from "react";
import InputField from "./InputField";
import { loginButton, registerButton } from "../ts/BackendAPI";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

// component for the register page
const RegisterPage = () => {

    // state variables

    const [isLogin, setLogin] = useState<boolean>(false);

    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');

    const [regPasswordValue, setRegPasswordValue] = useState<string>('');
    const [loginPasswordValue, setLoginPasswordValue] = useState<string>('');

    const [cityValue, setCityValue] = useState<string>('');

    // function to toggle between login, register and to clear the input fields
    const toggleIsLogin = () => { setLogin(!isLogin); }
    const clearInputFields = () => {
        setNameValue('');
        setEmailValue('');
        setRegPasswordValue('');
        setLoginPasswordValue('');
        setCityValue('');
    }

    // navigation hook
    const navigate = useNavigate();

    return (
        <div className="col-start-1 row-span-full col-span-full flex flex-col items-center justify-center w-full md:w-1/2 py-32 px-6 m-auto gap-5 md:gap-9">
            {isLogin ?
                <>
                    <h1 className="text-5xl leading-[1.25] font-semibold self-center text-center text-primary-col drop-shadow-md">Register</h1>
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
                        fieldType={"text"}
                        fieldID={"city"}
                        fieldName={"City"}
                        value={cityValue}
                        setterFunction={setCityValue}
                    />
                    <section className='flex items-center self-end px-4 mt-2 gap-4'>
                        <button
                            type="submit"
                            className='w-min border-[1px] border-primary-col text-primary-col bg-card-transp-white rounded py-2 px-4 transition hover:scale-110 shadow-md hover:shadow-primary-col-transp'
                            onClick={async () => {

                                registerButton(nameValue, emailValue, regPasswordValue, cityValue)
                                    .then((res) => {
                                        console.log(res);
                                        if(res) {
                                            clearInputFields();
                                            toggleIsLogin();
                                            toast.success('Resistered');
                                        } else {
                                            toast.error('Not registered');
                                        }
                                    })
                            }}>
                            Register
                        </button>
                        <p className="text-sm"> or </p>
                        <button className='text-accent-col font-light underline transition hover:scale-110' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Login</button>
                    </section>
                </>
                :
                <>
                    <h1 className="text-5xl leading-[1.25] font-semibold self-center text-center text-primary-col drop-shadow-md">Login</h1>
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
                        <button
                            type="submit"
                            className='w-min border-[1px] border-primary-col text-primary-col bg-card-transp-white rounded py-2 px-4 transition hover:scale-110 shadow-md hover:shadow-primary-col-transp'
                            onClick={async () => {
                                loginButton(emailValue, loginPasswordValue)
                                    .then((res) => {
                                        console.log(res);
                                        if(res) {
                                            clearInputFields();
                                            navigate('/weather', {
                                                state: res
                                            });
                                            toast.success('Login Successful');
                                        } else {
                                            toast.error('Login Failed');
                                        }
                                    })
                            }}>
                            Login
                        </button>
                        <p> or </p>
                        <button className='text-accent-col font-light underline transition hover:scale-110' onClick={() => {
                            toggleIsLogin();
                            clearInputFields();
                        }}>Register</button>
                    </section>
                </>
            }
            <ToastContainer />
        </div >
    );
}

export default RegisterPage