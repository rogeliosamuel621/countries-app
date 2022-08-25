import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'

export const CountryView: FC<Props> = () => {
  return <h1>Country</h1>
}

type Props = {
  country: ICountry
}
