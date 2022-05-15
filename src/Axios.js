import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-backend-gulam.herokuapp.com'
})

export default instance