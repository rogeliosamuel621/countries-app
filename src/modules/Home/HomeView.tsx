import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'
import { Actions } from './components/containers/Actions'
import { Countries } from './components/containers/Countries'

export const HomeView: FC<Props> = ({ countries }) => {
  return (
    <main className="p-5">
      <Actions />
      <Countries countries={countries} />
    </main>
  )
}

type Props = {
  countries: ICountry[]
}
