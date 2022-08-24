import { ICountry } from '@interfaces/api/country.interface'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { Dispatch, SetStateAction } from 'react'

export interface IFilterContextValue {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  filter: TFilters
  setFilter: Dispatch<SetStateAction<TFilters>>
  currentCountries: ICountry[]
}
