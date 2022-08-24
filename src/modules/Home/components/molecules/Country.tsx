import Image from 'next/image'
import { FC } from 'react'

export const Country: FC<Props> = ({ image, name, population, region, capital }) => {
  return (
    <article>
      <div>
        <Image src={image} alt={name} />
      </div>
      <div>
        <span>
          <strong>{name}</strong>
        </span>
        <div>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </article>
  )
}

type Props = {
  image: string
  name: string
  population: number
  region: string
  capital: string
}
