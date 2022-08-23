import { useThemeContext } from '@contexts/Theme.context'
import { fontTheme } from '@helpers/classes.helper'
import { Moon, Sun } from 'react-feather'

export const ToggleTheme = () => {
  const { theme, color, setTheme } = useThemeContext()
  const themeText = theme === 'light' ? 'Light' : 'Dark'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="flex gap-2">
      {theme === 'light' ? <Sun color={color} /> : <Moon color={color} />}
      <span className={fontTheme}>{themeText} Mode</span>
    </button>
  )
}
