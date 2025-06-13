import 'styled-components'
import { Theme } from '../Styles/theme'

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
