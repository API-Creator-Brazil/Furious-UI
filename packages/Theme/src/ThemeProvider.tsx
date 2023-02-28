import React, { createContext, useMemo, useState } from 'react'
import { DefaultTheme } from './defaultTheme'
import type { ThemeContextProps, ThemeProps } from './interfaces'

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

interface ThemeProviderProps {
  theme?: ThemeProps
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: injectedTheme,
}) => {
  const [runtimeTheme, setRuntimeTheme] = useState<ThemeProps | undefined>(
    undefined
  )

  const theme = useMemo(() => {
    if (runtimeTheme !== undefined) {
      return runtimeTheme
    }

    if (injectedTheme !== undefined) {
      return injectedTheme
    }

    return DefaultTheme
  }, [injectedTheme, runtimeTheme])

  const value: ThemeContextProps = useMemo(
    () => ({
      theme,
      setTheme: setRuntimeTheme,
    }),
    [theme, setRuntimeTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
