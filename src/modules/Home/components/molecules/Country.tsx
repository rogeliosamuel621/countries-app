/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Country: FC<Props> = ({ image, name, population, region, capital }) => {
  return (
    <article className="bg-light-1 dark:bg-dark-1 rounded shadow-lg transition">
      <Link href={`countries/${name}`}>
        <a>
          <div>
            {/* <Image
              src={image}
              alt={name}
              layout="responsive"
              width={900}
              height={600}
              className="rounded-t"
              loading="lazy"
            /> */}
            <img src={image} alt={name} />
          </div>
          <div className="p-4">
            <span className="text-black dark:text-white transition">
              <strong>{name}</strong>
            </span>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-subtitle-dark dark:text-subtitle-light text-sm font-light transition">
                <strong className="font-semibold">Population: </strong>
                {population}
              </p>
              <p className="text-subtitle-dark dark:text-subtitle-light text-sm font-light transition">
                <strong className="font-semibold">Region: </strong>
                {region}
              </p>
              <p className="text-subtitle-dark dark:text-subtitle-light text-sm font-light transition">
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
