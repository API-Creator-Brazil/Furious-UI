export interface ThemeSpacing {
  short: string
  normal: string
  long: string
}

export interface ThemeLineHeight {
  compact: string
  normal: string
  loose: string
}

export interface ThemeFontSize {
  extraSmall: string
  small: string
  normal: string
  large: string
  extraLarge: string
}

export interface ThemeColor {
  palette: {
    '10': string
    '20': string
    '30': string
    '40': string
    '50': string
    '60': string
    '70': string
    '80': string
    '90': string
    '100': string
  }
  light: string
  dark: string
  normal: string
}

export interface ThemeProps {
  spacing: ThemeSpacing
  lineHeight: ThemeLineHeight
  fontSize: ThemeFontSize

  colors: {
    primary: ThemeColor
    secondary: ThemeColor

    info: ThemeColor
    warning: ThemeColor
    success: ThemeColor
    error: ThemeColor

    gray: ThemeColor
    background: ThemeColor
  }
}

export interface ThemeContextProps {
  theme: ThemeProps
  setTheme: React.Dispatch<React.SetStateAction<ThemeProps | undefined>>
}
