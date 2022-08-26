import { FC } from 'react'
import { Content } from './components/Content'
import { IUniqueCountry } from './interfaces/country.interface'

export const CountryView: FC<Props> = () => {
  return <Content />
}

type Props = {
  country: IUniqueCountry
}
