import { Dispatch, SetStateAction } from 'react'

export interface IThemeContextValue {
  theme: TTheme
  setTheme: Dispatch<SetStateAction<TTheme>>
}

export type TTheme = 'light' | 'dark'
