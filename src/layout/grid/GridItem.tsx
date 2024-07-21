import { Grid } from '@mui/material'
import { PropsWithChildren } from 'react'

export type GridItemSize = 'small' | 'medium' | 'large' | 'huge'

/**
 * Best combinations:
 * - [huge]
 * - [large | small]
 * - [medium | medium]
 * - [small | small | small]
 */
const computeCols = (size?: GridItemSize) => {
  switch (size) {
    case 'small':
      return { xs: 12, sm: 4, md: 2 }
    case 'medium':
      return { xs: 12, sm: 6, md: 3 }
    case 'large':
      return { xs: 12, sm: 8, md: 4 }
    case 'huge':
      return { xs: 12 }
    default:
      return {}
  }
}

export interface GridItemProps {
  size?: GridItemSize
}

export const GridItem = (props: PropsWithChildren<GridItemProps>) => {
  const { size = 'medium', children } = props

  return (
    <Grid item {...computeCols(size)}>
      {children}
    </Grid>
  )
}

export const getGridItemProps = <Props extends GridItemProps>(props: Props): GridItemProps => {
  const { size } = props
  return { size }
}
