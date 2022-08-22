import { Moon } from '@components/icons/Moon'
import { useThemeContext } from 'common/context/Theme.context'

export const ToggleTheme = () => {
  const { theme, setTheme } = useThemeContext()
  const themeText = theme === 'light' ? 'Light' : 'Dark'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme}>
      <Moon />
      <span>{themeText} Mode</span>
    </button>
  )
}
