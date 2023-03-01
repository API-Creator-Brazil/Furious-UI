import { themeBuilder } from './themeBuilder'

export const primaryColors = [
  '#f3fff3',
  '#e6ffe7',
  '#d8ffdb',
  '#c9ffce',
  '#b8ffc1',
  '#a6ffb3',
  '#91ffa4',
  '#78ff94',
  '#56ff83',
  '#00ff6f',
]

export const secondaryColors = [
  '#ffe5cc',
  '#ffcab9',
  '#ffaea5',
  '#fd9291',
  '#f4777f',
  '#e75d6f',
  '#d84360',
  '#c52a52',
  '#ae1045',
  '#93003a',
]

export const successColors = [
  '#e9f2e6',
  '#d4e6cd',
  '#bed9b4',
  '#a9cc9c',
  '#93bf85',
  '#7db36d',
  '#66a656',
  '#4e993f',
  '#338d25',
  '#008000',
]

export const infoColors = [
  '#e9eaff',
  '#ced5ff',
  '#b2c2ff',
  '#96afff',
  '#779cff',
  '#508aff',
  '#0079fb',
  '#0069d9',
  '#0059b8',
  '#004b9a',
]

export const warningColors = [
  '#ffffc3',
  '#ffffba',
  '#ffffb0',
  '#ffffa6',
  '#ffff9a',
  '#ffff8b',
  '#ffff7c',
  '#ffff69',
  '#ffff4c',
  '#ffff00',
]

export const errorColors = [
  '#ffaaaa',
  '#ff978e',
  '#ff8273',
  '#fd6c58',
  '#f65741',
  '#ec432e',
  '#df301d',
  '#d01c0e',
  '#be0903',
  '#aa0000',
]

export const grayColors = [
  '#8a7a7f',
  '#817276',
  '#77696e',
  '#6e6165',
  '#65595d',
  '#5c5155',
  '#544a4d',
  '#4b4346',
  '#433c3e',
  '#3b3437',
]

export const backgroundColors = [
  '#fffcfd',
  '#fffbfc',
  '#fff8fa',
  '#fff5f9',
  '#fff3f7',
  '#fff1f6',
  '#ffeff4',
  '#ffecf2',
  '#ffebf1',
  '#ffe8ef',
]

export const foregroundColors = [
  '#363032',
  '#322d2f',
  '#2e282a',
  '#2a2526',
  '#262123',
  '#211d1e',
  '#1d1a1b',
  '#191617',
  '#121011',
  '#000000',
]

export const DefaultTheme = themeBuilder({
  spacing: ['8px', '16px', '32px'],
  lineHeight: ['14px', '18px', '22px'],
  fontSize: ['12px', '14px', '16px', '18px', '22px'],

  borderRadius: ['4px', '0px', '0px'],
  shadow: ['1px', '2px', '4px'],

  primary: primaryColors,
  secondary: secondaryColors,

  success: successColors,
  info: infoColors,
  warning: warningColors,
  error: errorColors,

  gray: grayColors,
  background: backgroundColors,
  foreground: foregroundColors,
})
