import { useThemeContext } from '@contexts/Theme.context'
import { Moon, Sun } from 'react-feather'

export const ToggleTheme = () => {
  const { theme, setTheme } = useThemeContext()
  const themeText = theme === 'light' ? 'Light' : 'Dark'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="flex gap-2">
      {theme === 'light' ? <Sun /> : <Moon />}
      <span>{themeText} Mode</span>
    </button>
  )
}
