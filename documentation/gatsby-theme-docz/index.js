/** @jsx jsx */
import { jsx } from 'theme-ui'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { Styled, ThemeProvider } from 'theme-ui'

// import MySvg from './svg-sprite.svg';

import defaultTheme from '~theme'
import components from '~components'
import SvgSprite from './svg-sprite'

const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
      <SvgSprite />
    </ThemeProvider>
  )
}

export default theme(defaultTheme)(Theme)