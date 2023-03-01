import React from 'react'
import { DefaultTheme } from '../../packages/Theme/src/defaultTheme'
import { FuriousThemeProvider } from '../../packages/Theme/src/FuriousThemeProvider'

export const CustomInitialTheme: React.FC = () => {
  const customTheme = {
    ...DefaultTheme,
    // overides
  }

  return (
    <FuriousThemeProvider theme={customTheme}>
      {
        // content
      }
    </FuriousThemeProvider>
  )
}
