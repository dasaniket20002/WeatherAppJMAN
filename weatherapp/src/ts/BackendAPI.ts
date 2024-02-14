import axios from 'axios';
import { UserDataWithoutPassword } from './Interfaces';

export const registerButton = async (name: string, email: string, password: string, city: string): Promise<boolean> => {
    const serverIP: string = 'http://localhost:5001/auth/register';
    const obj = {
        name,
        email,
        password,
        city,
    }
    try {
        const res = await axios.post(serverIP, obj);
        if (res.status === 200) {
            console.log('register successful', res.data);
            return true;
        }
    }
    catch (error) {
        console.error('Invalid request', error);
    }
    return false;
}

export const loginButton = async (email: string, password: string): Promise<UserDataWithoutPassword | undefined> => {
    const serverIP: string = 'http://localhost:5001/auth/login';
    const obj = {
        email,
        password,
    }
    try {
        const res = await axios.post(serverIP, obj);
        if (res.status === 200) {
            console.log('login successful', res.data);
            return res.data.user;
        }
    }
    catch (error) {
        console.error('Invalid request', error);
    }
    return undefined;
}