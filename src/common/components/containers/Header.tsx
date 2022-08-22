import { ToggleTheme } from '@components/atoms/ToggleTheme'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-light-1 dark:bg-dark-1">
      <div>
        <Link href="/">Where in the world?</Link>
      </div>
      <ToggleTheme />
    </header>
  )
}
