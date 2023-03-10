import { themeBuilder } from './themeBuilder'

export const DefaultTheme = themeBuilder({
  spacing: ['8px', '16px', '32px'],
  lineHeight: ['14px', '18px', '22px'],
  fontSize: ['12px', '14px', '16px', '18px', '22px'],

  primary: [
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
  ],

  secondary: [
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
  ],

  success: [
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
  ],

  info: [
    '#f2e8ff',
    '#e4d0ff',
    '#d5b9ff',
    '#c5a2ff',
    '#b38cff',
    '#a075ff',
    '#8b5eff',
    '#7246ff',
    '#502bff',
    '#0000ff',
  ],
  warning: [
    '#ffff66',
    '#fafa41',
    '#f4f431',
    '#efee25',
    '#e9e91b',
    '#e3e312',
    '#dddd0a',
    '#d7d704',
    '#d2d201',
    '#cccc00',
  ],

  error: [
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
  ],

  gray: [
    '#c6c6c6',
    '#b4b4b4',
    '#a2a2a2',
    '#919191',
    '#7f7f7f',
    '#6f6f6f',
    '#5e5e5e',
    '#4e4e4e',
    '#3f3f3f',
    '#303030',
  ],
  background: [
    '#ffffff',
    '#fbfbfb',
    '#f7f7f7',
    '#f4f4f4',
    '#f0f0f0',
    '#ececec',
    '#e8e8e8',
    '#e4e4e4',
    '#e1e1e1',
    '#dddddd',
  ],
})
