import { IThemeContextValue, TColor, TTheme } from '@interfaces/context/theme.interface'
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'

const ThemeContext = createContext<IThemeContextValue>({
  theme: 'light',
  setTheme: () => null,
  color: 'white'
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>('light')
  const color: TColor = theme === 'light' ? 'black' : 'white'

  return (
    <ThemeContext.Provider value={{ theme, color, setTheme }}>
      <div className={`${theme} min-h-screen`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
