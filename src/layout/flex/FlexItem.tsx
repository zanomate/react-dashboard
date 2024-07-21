import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { FlexItem as ReactFlexElementItem, ItemProps } from 'react-flex-element'

export interface FlexItemProps extends ItemProps {}

export const FlexItem = (props: PropsWithChildren<FlexItemProps>) => {
  const { children } = props

  return (
    <ReactFlexElementItem as={Box} {...props}>
      {children}
    </ReactFlexElementItem>
  )
}

export const getFlexItemProps = <Props extends FlexItemProps>(props: Props): FlexItemProps => {
  const {
    order,
    flexGrow,
    grow,
    flexShrink,
    shrink,
    flexBasis,
    basis,
    alignSelf,
    self,
    selfStart,
    selfEnd,
    selfCenter,
    selfStretch,
    selfBaseline,
    fill,
  } = props
  return {
    order,
    flexGrow,
    grow,
    flexShrink,
    shrink,
    flexBasis,
    basis,
    alignSelf,
    self,
    selfStart,
    selfEnd,
    selfCenter,
    selfStretch,
    selfBaseline,
    fill,
  }
}
