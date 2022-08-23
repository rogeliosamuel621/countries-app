import { Dispatch, SetStateAction } from 'react'

export interface IThemeContextValue {
  theme: TTheme
  color: TColor
  setTheme: Dispatch<SetStateAction<TTheme>>
}

export type TTheme = 'light' | 'dark'
export type TColor = 'white' | 'black'
