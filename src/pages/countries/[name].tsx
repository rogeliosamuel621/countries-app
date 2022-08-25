import { CountryView } from '@modules/Country/CountryView'
import { IUniqueCountry } from '@modules/Country/interfaces/country.interface'
import { getAllCountries, getCountryByName } from 'common/api/contry.api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { FC } from 'react'

const CountryPage: FC<Props> = ({ country }) => {
  console.log({
    country
  })

  return <CountryView country={country} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCountries = await getAllCountries()

  const paths = allCountries.map((country) => ({
    params: { name: country.name.common }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as TParams
  const country = await getCountryByName(name)

  return {
    props: {
      country
    }
  }
}

type TParams = ParsedUrlQuery & {
  name: string
}

type Props = {
  country: IUniqueCountry
}

export default CountryPage
