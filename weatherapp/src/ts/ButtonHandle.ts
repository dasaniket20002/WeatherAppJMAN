import axios from 'axios';

export const registerButton = (name: string, email: string, password: string, country: string): void => {
    const serverIP: string = 'http://localhost:5001/auth/register';
    const obj = {
        name,
        email,
        password,
        country,
    }
    console.log(obj);
    axios.post(serverIP, obj).then((res) => {
        console.log('login', res.data);
    })
    .catch((e) => {
        console.log('Login Failed', e);
    });
}

export const loginButton = (email: string, password: string): void => {
    const serverIP: string = 'http://localhost:5001/auth/login';
    const obj = {
        email,
        password,
    }
    console.log(obj);
    axios.post(serverIP, obj).then((res) => {
        console.log('login', res.data);
    })
    .catch((e) => {
        console.log('Login Failed', e);
    });
}