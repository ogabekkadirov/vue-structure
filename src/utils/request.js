import axios from "axios"

import store from "@/store"
import {
    getAccessToken
} from "@/utils/auth"
import router from "../router"

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_URL, // process.env.VUE_APP_BASE_API, // url = base url + request url

    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000 // request timeout
});

service.interceptors.request.use(
    config => {
        let accessToken = getAccessToken()
        if (accessToken != null) {
            config.headers["Authorization"] = "Bearer " + accessToken;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        const res = response
        if (response.status != 200 || response.status != 201 || response.status != 204) {
            return res.data
        } else {
            return Promise.reject(new Error(res.message || "Error"))
        }
    },
    error => {
        if (error.response && error.response.status === 401) {
            store.dispatch("auth/resetToken")
            if (router.history.current.name != 'Login') {
                router.push({
                    name: 'Login'
                });
            }
        }
        return Promise.reject(error.response);
    }
);

export default service;