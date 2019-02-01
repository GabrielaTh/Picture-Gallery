import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:4000";

export default {
    login : (email, password) => {
        return axios.post(burl + '/signin', {
            'email': email,
            'password': password
        }, {
            headers:headers
        })
    },
    signup : (send) => {
        return axios.post(burl + '/signup', send, {headers:headers})
    },
    
    isAuth : () => {
        return (localStorage.getItem('token') !== null);
    },
    logout : () => {
        localStorage.clear();
    } 
}