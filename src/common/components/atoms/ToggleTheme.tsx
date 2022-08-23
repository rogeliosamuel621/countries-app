import { useThemeContext } from '@contexts/Theme.context'
import { mediaTo640 } from '@helpers/media-queries.helpers'
import { Moon, Sun } from 'react-feather'
import useMedia from 'use-media'

export const ToggleTheme = () => {
  const { theme, color, setTheme } = useThemeContext()
  const isMobile = useMedia(mediaTo640)
  const themeText = theme === 'light' ? 'Light Mode' : 'Dark Mode'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="flex gap-1 items-center">
      {theme === 'light' ? <Sun size={18} color={color} /> : <Moon size={18} color={color} />}
      <span className="text-dark-1 dark:text-light-1 text-xs">{themeText}</span>
    </button>
  )
}
