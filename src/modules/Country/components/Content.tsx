import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'

export const Content: FC<Props> = ({ country }) => {
  return (
    <main>
      <div>{/* <img src={country?.flags.svg} alt={country?.name.common} /> */}</div>
      <div>
        <div>
          <p>Population: {country?.population}</p>
          <p>Region: {country?.region}</p>
          <p>Sub Region: {country?.subregion}</p>
          <p>Capital: {country?.capital[0]}</p>
        </div>
        <div>
          {/* <p>Top Level Domain: {country?.capital}</p> */}
          {/* <p>Currencies: {country?.currencies[0]?.name}</p>
          <p>Languages: {country?.languages[0]?.name}</p> */}
        </div>
        <div>
          <p>Border Countries</p>
        </div>
      </div>
    </main>
  )
}

type Props = {
  country: ICountry
}
