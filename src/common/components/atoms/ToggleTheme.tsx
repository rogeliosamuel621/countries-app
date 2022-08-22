import { useThemeContext } from 'common/context/Theme.context'
import { Moon } from 'react-feather'

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
