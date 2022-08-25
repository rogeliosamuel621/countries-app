import { FC } from 'react'
import { IUniqueCountry } from './interfaces/country.interface'

export const CountryView: FC<Props> = () => {
  return <h1>Country</h1>
}

type Props = {
  country: IUniqueCountry
}
