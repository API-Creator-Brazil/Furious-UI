import React, { createContext } from 'react'
import { DefaultTheme } from './defaultTheme'
import type { ThemeContextProps } from './interfaces'

export const ThemeContext = createContext<ThemeContextProps>(DefaultTheme)

interface ThemeProviderProps {
  theme?: ThemeContextProps
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme ?? DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
