import { createTheme, Theme, ThemeProvider } from '@mui/material'
import { merge } from 'lodash'
import { PropsWithChildren, useMemo } from 'react'
import {
  GlobalConfigContext,
  GlobalConfigContextValue,
  globalConfigDefaultValue,
} from '../config/config'
import { theme as baseTheme } from '../config/mui/theme'

import '../config/i18next/i18n'

export interface AppProps {
  theme?: Partial<Theme>
  config?: Partial<GlobalConfigContextValue>
}

export const App = (props: PropsWithChildren<AppProps>) => {
  const { theme: themeCustomization = {}, children, config = {} } = props

  const configValue = useMemo(() => merge(globalConfigDefaultValue, config), [config])
  const theme = useMemo(() => createTheme(baseTheme, themeCustomization), [themeCustomization])

  return (
    <GlobalConfigContext.Provider value={configValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalConfigContext.Provider>
  )
}
