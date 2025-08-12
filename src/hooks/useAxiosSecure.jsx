import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-liard-theta.vercel.app'
})

const useAxiosSecure = () => {
    const { logOutUser } = useAuth()
    const navigate = useNavigate()

    // call interceptors to add all authorization headers for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // // console.log('request stopped by interceptors', config);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    })


    // intercept 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        if (status === 401 || status === 403) {
            await logOutUser()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxiosSecure;