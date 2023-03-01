import type { ThemeColor, FuriousTheme } from './interfaces'

export const themeColorsBuilder = (palette: string[]): ThemeColor => {
  return {
    light: palette[4],
    normal: palette[6],
    dark: palette[8],
    palette: {
      '10': palette[0],
      '20': palette[1],
      '30': palette[2],
      '40': palette[3],
      '50': palette[4],
      '60': palette[5],
      '70': palette[6],
      '80': palette[7],
      '90': palette[8],
      '100': palette[9],
    },
  }
}

interface ThemeBuilderProps {
  spacing: string[]
  lineHeight: string[]
  fontSize: string[]
  borderRadius: string[]
  shadow: string[]

  primary: string[]
  secondary: string[]

  success: string[]
  info: string[]
  warning: string[]
  error: string[]

  gray: string[]
  background: string[]
  foreground: string[]
}

export const themeBuilder = ({
  spacing,
  lineHeight,
  fontSize,
  borderRadius,
  shadow,

  primary,
  secondary,

  success,
  info,
  warning,
  error,

  gray,
  background,
  foreground,
}: ThemeBuilderProps): FuriousTheme => {
  return {
    spacing: {
      short: spacing[0],
      normal: spacing[1],
      long: spacing[2],
    },

    lineHeight: {
      compact: lineHeight[0],
      normal: lineHeight[1],
      loose: lineHeight[2],
    },

    borderRadius: {
      rounded: borderRadius[0],
      sharp: borderRadius[1],
      default: borderRadius[2],
    },

    shadow: {
      light: shadow[0],
      normal: shadow[1],
      heavy: shadow[2],
    },

    fontSize: {
      extraSmall: fontSize[0],
      small: fontSize[1],
      normal: fontSize[2],
      large: fontSize[3],
      extraLarge: fontSize[4],
    },

    colors: {
      primary: themeColorsBuilder(primary),
      secondary: themeColorsBuilder(secondary),

      success: themeColorsBuilder(success),
      info: themeColorsBuilder(info),
      warning: themeColorsBuilder(warning),
      error: themeColorsBuilder(error),

      gray: themeColorsBuilder(gray),
      background: themeColorsBuilder(background),
      foreground: themeColorsBuilder(foreground),
    },
  }
}
