import { useContext, useEffect } from 'react'
import { DefaultTheme } from '../../packages/Theme/src/defaultTheme'
import { FuriousThemeContext } from '../../packages/Theme/src/FuriousThemeProvider'

export const useSetNewTheme = (): void => {
  const { setTheme } = useContext(FuriousThemeContext)

  useEffect(() => {
    setTheme({
      ...DefaultTheme,
      // some overides
    })
  }, [])
}
