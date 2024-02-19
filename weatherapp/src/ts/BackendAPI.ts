// import neccesssary framworks and functions
import axios from 'axios';

// function to handle registration request
export const registerButton = async (name: string, email: string, password: string, city: string): Promise<any | undefined> => {
    const serverIP: string = 'http://localhost:5001/auth/register';
    const obj = {
        name,
        email,
        password,
        city,
    }
    try {
        const res = await axios.post(serverIP, obj);
        return res;
    }
    catch (error) {
        console.error('Invalid request', error);
    }
    return undefined;
}

// function to handle login request
export const loginButton = async (email: string, password: string): Promise<any | undefined> => {
    const serverIP: string = 'http://localhost:5001/auth/login';
    const obj = {
        email,
        password,
    }
    try {
        const res = await axios.post(serverIP, obj);
        // if (res.status === 200) {
        //     console.log('login successful', res.data);
        //     //return res.data.user;
        // }
        return res;
    }
    catch (error) {
        console.error('Invalid request', error);
    }
    return undefined;
}