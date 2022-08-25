/* eslint-disable @next/next/no-img-element */
import { isInViewport } from '@helpers/viewport.helper'
import Link from 'next/link'
import { FC, useRef } from 'react'

export const Country: FC<Props> = ({ image, name, population, region, capital }) => {
  const countryCard = useRef(null)
  const isInViewPort = isInViewport(countryCard.current)

  return (
    <article
      ref={countryCard}
      className={`bg-light-1 dark:bg-dark-1 rounded shadow-lg ${isInViewPort && 'transition'}`}
    >
      <Link href={`countries/${name}`}>
        <a>
          <div>
            <img src={image} alt={name} className="rounded-t-sm" />
          </div>
          <div className="p-4">
            <span className={`text-black dark:text-white ${isInViewPort && 'transition'}`}>
              <strong>{name}</strong>
            </span>
            <div className="mt-4 flex flex-col gap-1">
              <p
                className={`text-subtitle-dark dark:text-subtitle-light text-sm font-light ${
                  isInViewPort && 'transition'
                }`}
              >
                <strong className="font-semibold">Population: </strong>
                {population}
              </p>
              <p
                className={`text-subtitle-dark dark:text-subtitle-light text-sm font-light ${
                  isInViewPort && 'transition'
                }`}
              >
                <strong className="font-semibold">Region: </strong>
                {region}
              </p>
              <p
                className={`text-subtitle-dark dark:text-subtitle-light text-sm font-light ${
                  isInViewPort && 'transition'
                }`}
              >
                <strong className="font-semibold">Capital: </strong>
                {capital}
              </p>
            </div>
          </div>
        </a>
      </Link>
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
