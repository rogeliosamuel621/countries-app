import { FilterProvider } from '@contexts/Filter.context'
import { ICountry } from '@interfaces/api/country.interface'
import { FC } from 'react'
import { Actions } from './components/containers/Actions'
import { Countries } from './components/containers/Countries'

export const HomeView: FC<Props> = ({ countries }) => {
  return (
    <FilterProvider countries={countries}>
      <main className="p-5 sm:mx-24">
        <Actions />
        <Countries countries={countries} />
      </main>
    </FilterProvider>
  )
}

type Props = {
  countries: ICountry[]
}
