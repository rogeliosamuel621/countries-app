import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'
import { Country } from '../molecules/Country'

export const Countries: FC<Props> = ({ countries }) => {
  if (!countries.length) return <h1>loading</h1>

  return (
    <section className="flex flex-col gap-4 mt-7">
      {countries.map((country) => (
        <Country
          key={country.name.common + country.population}
          image={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={''}
        />
      ))}

      <Country
        image="https://flagcdn.com/cn.svg"
        name="China"
        population={1402112000}
        region="Asia"
        capital="Beijing"
      />
      <Country
        image="https://flagcdn.com/cn.svg"
        name="China"
        population={1402112000}
        region="Asia"
        capital="Beijing"
      />
    </section>
  )
}

type Props = {
  countries: ICountry[]
}
