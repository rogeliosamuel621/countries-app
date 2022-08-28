import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'
import { Content } from './components/Content'

export const CountryView: FC<Props> = ({ country }) => {
  return <Content country={country} />
}

type Props = {
  country: ICountry
}
