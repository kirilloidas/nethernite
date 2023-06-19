import axios from 'axios'
import store from '@/store'
import * as config from '../assets/config.json'
import errorHandler from '@/api/errorHandler'

export const api = () => {
    const instance = axios.create({
        baseURL: config.baseUrl,
    })
    instance.interceptors.request
        .use((request) => {
            store.commit('incrementLoader')
            return request
        })
    instance.interceptors.response
        .use((response) => {
                store.commit('decrementLoader')
                return response
            },
            (error) => {
                store.commit('setMessage', errorHandler(error))
                store.commit('decrementLoader')
                return Promise.reject(error)
            }
        )
    return instance
}

