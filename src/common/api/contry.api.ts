import { ICountry } from '@interfaces/api/country.interface'
import { getApi } from './api.api'

export const getAllCountries = async (): Promise<ICountry[] | never[]> => {
  try {
    const response = await getApi<ICountry[]>('all')

    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getCountryByName = async (name: string): Promise<ICountry | null> => {
  try {
    const response = await getApi<ICountry>(`name/${name}`)

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
