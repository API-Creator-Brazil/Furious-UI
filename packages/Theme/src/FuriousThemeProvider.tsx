import React, { createContext, useMemo, useState } from 'react'
import { DefaultTheme } from './defaultTheme'
import type { FuriousThemeContextProps, FuriousTheme } from './interfaces'
import { ThemeProvider } from 'styled-components'

export const FuriousThemeContext = createContext<FuriousThemeContextProps>(
  {} as FuriousThemeContextProps
)

interface FuriousThemeProviderProps {
  theme?: FuriousTheme
  children: React.ReactNode
}

export const FuriousThemeProvider: React.FC<FuriousThemeProviderProps> = ({
  children,
  theme: injectedTheme,
}) => {
  const [runtimeTheme, setRuntimeTheme] = useState<FuriousTheme | undefined>(
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

  const value: FuriousThemeContextProps = useMemo(
    () => ({
      theme,
      setTheme: setRuntimeTheme,
    }),
    [theme, setRuntimeTheme]
  )

  return (
    <FuriousThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FuriousThemeContext.Provider>
  )
}
