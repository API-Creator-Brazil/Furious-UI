import 'styled-components'
import type { FuriousTheme } from './Theme/src/interfaces'

declare module 'styled-components' {
  export interface DefaultTheme extends FuriousTheme {}
}
