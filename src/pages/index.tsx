import { ICountry } from '@interfaces/api/country.interface'
import { HomeView } from '@modules/Home/HomeView'
import { getAllCountries } from 'common/api/contry.api'
import { GetStaticProps } from 'next'
import { FC } from 'react'

const Home: FC<Props> = ({ countries }) => {
  return <HomeView countries={countries} />
}

export const getStaticProps: GetStaticProps = async () => {
  const countries = await getAllCountries()

  return {
    props: {
      countries
    }
  }
}

type Props = {
  countries: ICountry[] | never[]
}

export default Home
