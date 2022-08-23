import { ToggleTheme } from '@components/atoms/ToggleTheme'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-light-1 dark:bg-dark-1 flex justify-between p-6 items-center shadow-lg transition">
      <div>
        <Link href="/">
          <span className="text-fLight dark:text-fDark font-extrabold text-lg transition">
            Where in the world?
          </span>
        </Link>
      </div>
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}
