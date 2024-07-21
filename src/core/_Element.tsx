import { PropsWithChildren } from 'react'

export interface _ElementProps {
  // variant?: string // TODO: find different name
}

export const _Element = (props: PropsWithChildren<_ElementProps>) => {
  const { children } = props

  // TODO: do something with variant

  return <>{children}</>
}

export const getElementProps = <Props extends _ElementProps>(props: Props): _ElementProps =>
  // const { } = props
  ({})
