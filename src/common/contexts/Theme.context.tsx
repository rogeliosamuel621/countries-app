import { IThemeContextValue, TColor, TTheme } from '@interfaces/context/theme.interface'
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'

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
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
