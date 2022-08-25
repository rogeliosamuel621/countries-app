import { getAllCountries, getCountryByName } from 'common/api/contry.api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

export const CountryPage = () => {}

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
  const { name } = ctx as TParams
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
