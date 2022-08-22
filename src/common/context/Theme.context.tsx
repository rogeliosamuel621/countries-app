import { IThemeContextValue, TTheme } from '@interfaces/context/theme.interface'
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<IThemeContextValue>({
  theme: 'light',
  setTheme: () => null
})

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
