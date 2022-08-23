import { ToggleTheme } from '@components/atoms/ToggleTheme'
import { bgTheme1, fontTheme } from '@helpers/classes.helper'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={`${bgTheme1} flex justify-between p-4`}>
      <div>
        <Link href="/">
          <span className={fontTheme}>Where in the world?</span>
        </Link>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}
