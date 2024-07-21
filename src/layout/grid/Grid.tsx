import { Grid as MuiGrid } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Layout, LayoutType } from '../Layout'
import { getLayoutItemProps } from '../LayoutItem'

export interface GridProps {}

export const Grid = (props: PropsWithChildren<GridProps>) => {
  const { children } = props
  return (
    <Layout
      type={LayoutType.GRID}
      LayoutComponent={(p) => <MuiGrid container spacing={2} {...props} {...p} />}
    >
      {children}
    </Layout>
  )
}

export const getGridProps = <Props extends GridProps>(props: Props): GridProps => ({
  ...getLayoutItemProps(props),
})
