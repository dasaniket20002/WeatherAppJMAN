import { useState } from "react";
import InputField from "./InputField";

const RegisterPage = () => {
    const [isLogin, setLogin] = useState<boolean>(false);

    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');

    const [regPasswordValue, setRegPasswordValue] = useState<string>('');
    const [loginPasswordValue, setLoginPasswordValue] = useState<string>('');

    const [countryValue, setCountryValue] = useState<string>('');

    const toggleIsLogin = () => { setLogin(!isLogin); }
    const clearInputFields = () => {
        setNameValue('');
        setEmailValue('');
        setRegPasswordValue('');
        setLoginPasswordValue('');
        setCountryValue('');
    }

    return (
        <div className="col-start-1 row-span-full col-span-full flex flex-col items-center justify-center w-full md:w-1/2 px-6 m-auto gap-2">
            {isLogin ?
                <>
                    <h1 className="text-5xl leading-[1.25] font-semibold self-center text-center text-primary-col drop-shadow-md">Register</h1>
                    <form className="w-full h-full flex flex-col items-center justify-center gap-5 md:gap-9" action="">
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
                            fieldID={"country"}
                            fieldName={"Country"}
                            value={countryValue}
                            setterFunction={setCountryValue}
                        />
                        <section className='flex items-center self-end px-4 mt-2 gap-4'>
                            <button type="submit" className='w-min border-[1px] border-primary-col text-primary-col bg-card-transp-white rounded py-2 px-4 transition hover:scale-110 shadow-md hover:shadow-primary-col-transp'>Register</button>
                            <p className="text-sm"> or </p>
                            <button className='text-accent-col font-light underline transition hover:scale-110' onClick={() => {
                                toggleIsLogin();
                                clearInputFields();
                            }}>Login</button>
                        </section>
                    </form>
                </>
                :
                <>
                    <h1 className="text-5xl leading-[1.25] font-semibold self-center text-center text-primary-col drop-shadow-md">Login</h1>
                    <form className="w-full h-full flex flex-col items-center justify-center gap-5 md:gap-9" action="">
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
                            <button type="submit" className='w-min border-[1px] border-primary-col text-primary-col bg-card-transp-white rounded py-2 px-4 transition hover:scale-110 shadow-md hover:shadow-primary-col-transp'>Login</button>
                            <p> or </p>
                            <button className='text-accent-col font-light underline transition hover:scale-110' onClick={() => {
                                toggleIsLogin();
                                clearInputFields();
                            }}>Register</button>
                        </section>
                    </form>
                </>
            }
        </div>
    );
}

export default RegisterPage