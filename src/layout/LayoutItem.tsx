import { Fragment, PropsWithChildren, useMemo } from 'react'
import { _Element, _ElementProps, getElementProps } from '../core/_Element'
import { FlexItem, FlexItemProps, getFlexItemProps } from './flex/FlexItem'
import { getGridItemProps, GridItem, GridItemProps } from './grid/GridItem'
import { LayoutType, useLayoutContext } from './Layout'

export interface LayoutItemProps extends _ElementProps, FlexItemProps, GridItemProps {}

export const LayoutItem = (props: PropsWithChildren<LayoutItemProps>) => {
  const { children, ...otherProps } = props

  const { type } = useLayoutContext()

  const LayoutComponent = useMemo(() => {
    switch (type) {
      case LayoutType.FLEX:
        return ({ children: c }) => <FlexItem {...(otherProps as GridItemProps)}>{c}</FlexItem>
      case 'grid':
        return ({ children: c }) => <GridItem {...(otherProps as GridItemProps)}>{c}</GridItem>
      case 'none':
      default:
        return Fragment
    }
  }, [type])

  return (
    <_Element {...props}>
      <LayoutComponent>{children}</LayoutComponent>
    </_Element>
  )
}

export const getLayoutItemProps = <Props extends LayoutItemProps>(
  props: Props,
): LayoutItemProps => ({
  ...getElementProps(props),
  ...getFlexItemProps(props as FlexItemProps),
  ...getGridItemProps(props as GridItemProps),
})
