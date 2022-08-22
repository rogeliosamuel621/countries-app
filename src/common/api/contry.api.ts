import { getApi } from './api.api'

export const getAllCountries = () => getApi('all')
export const getCountryByName = (name: string) => getApi(`name/${name}`)
