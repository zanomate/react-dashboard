import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material/styles/createTheme'

export const components: Components<Omit<Theme, 'components'>> = {
  MuiIconButton: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiInputBase: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiFormLabel: {
    defaultProps: {},
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
      placement: 'top',
    },
  },
}
