import { ICountry } from '@interfaces/api/country.interface'
import { FC, useState } from 'react'
import { Country } from '../molecules/Country'

export const Countries: FC<Props> = ({ countries }) => {
  const [limit, setLimit] = useState(10)
  if (!countries.length) return <h1>loading</h1>

  const current = countries.slice(0, limit)

  return (
    <section className="flex flex-col gap-4 mt-7">
      {current.map((country) => (
        <Country
          key={country.population}
          image={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={''}
        />
      ))}
      <div className="flex justify-center">
        <button
          onClick={() => setLimit(limit + 10)}
          className="bg-light-1 dark:bg-dark-1 shadow-sm rounded-sm p-4 text-black dark:text-white"
        >
          Load more
        </button>
      </div>
    </section>
  )
}

type Props = {
  countries: ICountry[]
}
