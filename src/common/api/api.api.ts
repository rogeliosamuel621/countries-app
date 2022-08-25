import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/'
})

export const getApi = <T = any>(url: string) => axiosInstance.get<T>(url)
