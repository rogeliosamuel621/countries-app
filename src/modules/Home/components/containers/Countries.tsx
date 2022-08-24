import { useFilterContext } from '@contexts/Filter.context'
import { ICountry } from '@interfaces/api/country.interface'
import { getFilterText } from '@modules/Home/helpers/filter.helper'
import { FC } from 'react'
import { Country } from '../molecules/Country'

export const Countries: FC<Props> = () => {
  const { currentCountries } = useFilterContext()

  if (!currentCountries.length) return <h1>loading</h1>

  return (
    <section className="flex flex-col gap-4 mt-7">
      {currentCountries.map((country) => (
        <Country
          key={country.name.common + country.population}
          image={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={getFilterText(country.region)}
          capital={country.capital[0]}
        />
      ))}
    </section>
  )
}

type Props = {
  countries: ICountry[]
}
