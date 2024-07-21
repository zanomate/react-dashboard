import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { ContainerProps, Flex as ReactFlexElement } from 'react-flex-element'
import { Layout, LayoutType } from '../Layout'
import { getLayoutItemProps, LayoutItemProps } from '../LayoutItem'

export interface FlexProps extends ContainerProps, LayoutItemProps {}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
  const { children } = props
  return (
    <Layout
      type={LayoutType.FLEX}
      LayoutComponent={(p) => <ReactFlexElement as={Box} gap={16} {...props} {...p} />}
    >
      {children}
    </Layout>
  )
}

export const getFlexProps = <Props extends FlexProps>(props: Props): FlexProps => {
  const {
    display,
    inline,
    flexDirection,
    direction,
    row,
    col,
    column,
    rowReverse,
    colReverse,
    columnReverse,
    reverse,
    flexWrap,
    wrap,
    nowrap,
    wrapReverse,
    justifyContent,
    justify,
    start,
    end,
    center,
    spaceBetween,
    spaceAround,
    spaceEvenly,
    alignItems,
    align,
    alignStart,
    alignEnd,
    alignCenter,
    stretch,
    alignStretch,
    baseline,
    alignBaseline,
    alignContent,
    contentStart,
    contentEnd,
    contentCenter,
    contentStretch,
    contentSpaceBetween,
    contentSpaceAround,
    gap,
    rowGap,
    columnGap,
    colGap,
  } = props
  return {
    ...getLayoutItemProps(props),
    display,
    inline,
    flexDirection,
    direction,
    row,
    col,
    column,
    rowReverse,
    colReverse,
    columnReverse,
    reverse,
    flexWrap,
    wrap,
    nowrap,
    wrapReverse,
    justifyContent,
    justify,
    start,
    end,
    center,
    spaceBetween,
    spaceAround,
    spaceEvenly,
    alignItems,
    align,
    alignStart,
    alignEnd,
    alignCenter,
    stretch,
    alignStretch,
    baseline,
    alignBaseline,
    alignContent,
    contentStart,
    contentEnd,
    contentCenter,
    contentStretch,
    contentSpaceBetween,
    contentSpaceAround,
    gap,
    rowGap,
    columnGap,
    colGap,
  }
}
