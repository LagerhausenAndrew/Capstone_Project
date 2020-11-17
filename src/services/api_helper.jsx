import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3001'
    baseURL: 'https://secret-sands-89633.herokuapp.com'
})

// ============AUTH============
export const registerUser = async (registerData) => {
    try{
        const resp = await api.post('/auth/signup', registerData);
        console.log(resp);
        localStorage.setItem('authToken', resp.data.token);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
        return resp.data.user; 
    } catch(err) {console.log('help please========================')}
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

export const allProducts = async () => {
    const resp = await api.get('/product/all');
    return resp;
}