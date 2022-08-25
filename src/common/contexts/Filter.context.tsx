/* eslint-disable react-hooks/exhaustive-deps */
import { ICountry } from '@interfaces/api/country.interface'
import { IFilterContextValue } from '@interfaces/context/filter.interface'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'

const FilterContext = createContext<IFilterContextValue>({
  query: '',
  filter: 'region',
  currentCountries: [],
  setQuery: () => null,
  setFilter: () => null
})

export const FilterProvider: FC<PropsWithChildren<Props>> = ({ countries, children }) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<TFilters>('region')
  const [currentCountries, setCurrentCountries] = useState<ICountry[]>(countries)

  const filterByRegion = () => {
    const americanCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === 'americas'
    )
    const asianCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === 'asia'
    )
    const africanCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === 'africa'
    )
    const europeanCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === 'europe'
    )
    const oceanianCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === 'oceania'
    )

    const newCountries = [
      ...americanCountries,
      ...asianCountries,
      ...africanCountries,
      ...europeanCountries,
      ...oceanianCountries
    ]

    return newCountries
  }

  useEffect(() => {
    if (filter === 'region') {
      const newCountries = filterByRegion()

      setCurrentCountries(newCountries)
      return
    }

    const newCountries = countries.filter(
      (country) => country.region.toLocaleLowerCase() === filter
    )
    setCurrentCountries(newCountries)
  }, [filter])

  useEffect(() => {
    if (!query) {
      const newCountries = filterByRegion()
      setCurrentCountries(newCountries)
      return
    }

    const newCountries = countries.filter((country) => {
      return country.name.common.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })

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

export const useFilterContext = () => useContext(FilterContext)

type Props = {
  countries: ICountry[]
}
