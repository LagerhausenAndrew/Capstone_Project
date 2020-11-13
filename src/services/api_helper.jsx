import axios from 'axios';

const api = axios.create({
    baseURL: 'https://secret-sands-89633.herokuapp.com/'
    // baseURL: 'http://localhost:3001'
})

// ============AUTH============
export const registerUser = async (registerData) => {
    const resp = await api.post('/auth/signup' , registerData);
    console.log(resp);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login' , loginData);
    console.log(resp);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return false;
}