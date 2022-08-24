import { useFilterContext } from '@contexts/Filter.context'
import { mediaTo640 } from '@helpers/media-queries.helpers'
import { ICountry } from '@interfaces/api/country.interface'
import { getFilterText } from '@modules/Home/helpers/filter.helper'
import { TFilters } from '@modules/Home/interface/filter.interface'
import { FC, useState } from 'react'
import useMedia from 'use-media'
import { Country } from '../molecules/Country'

export const Countries: FC<Props> = () => {
  const { currentCountries } = useFilterContext()
  const [limit, setLimit] = useState(10)
  const isMobile = useMedia(mediaTo640)

  if (!currentCountries.length) return <h1>loading</h1>

  const current = isMobile ? currentCountries.slice(0, limit) : currentCountries

  return (
    <section className="flex flex-col gap-4 mt-7">
      {current.map((country) => (
        <Country
          key={country.name.common + country.population}
          image={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={getFilterText(country.region)}
          capital={country.capital[0]}
        />
      ))}
      <div className="flex justify-center">
        {isMobile && (
          <button
            onClick={() => setLimit(limit + 10)}
            className="bg-light-1 dark:bg-dark-1 shadow-sm rounded-sm p-4 text-black dark:text-white"
          >
            Load more
          </button>
        )}
      </div>
    </section>
  )
}

type Props = {
  countries: ICountry[]
}
