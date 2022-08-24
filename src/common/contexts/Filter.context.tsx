/* eslint-disable react-hooks/exhaustive-deps */
import { ICountry } from '@interfaces/api/country.interface'
import { IFilterContextValue } from '@interfaces/context/filter.interface'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react'

const FilterContext = createContext<IFilterContextValue>({
  query: '',
  filter: 'region',
  currentCountries: [],
  setQuery: () => {},
  setFilter: () => {}
})

export const FilterProvider: FC<PropsWithChildren<Props>> = ({ countries, children }) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<TFilters>('region')
  const [currentCountries, setCurrentCountries] = useState<ICountry[]>(countries)

  useEffect(() => {
    if (filter === 'region') {
      const americanCountries = currentCountries.filter((country) => country.region === 'america')
      const asianCountries = currentCountries.filter((country) => country.region === 'asia')
      const africanCountries = currentCountries.filter((country) => country.region === 'africa')
      const europeanCountries = currentCountries.filter((country) => country.region === 'europe')
      const oceanianCountries = currentCountries.filter((country) => country.region === 'oceania')

      const newCountries = [
        ...americanCountries,
        ...asianCountries,
        ...africanCountries,
        ...europeanCountries,
        ...oceanianCountries
      ]

      setCurrentCountries(newCountries)
      return
    }

    const newCountries = currentCountries.filter((country) => country.region === filter)
    setCurrentCountries(newCountries)
  }, [filter])

  useEffect(() => {
    const newCountries = currentCountries.filter((country) => country.name.common === query)
    setCurrentCountries(newCountries)
  }, [query])

  return (
    <FilterContext.Provider
      value={{
        filter,
        query,
        currentCountries,
        setQuery,
        setFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

type Props = {
  countries: ICountry[]
}
