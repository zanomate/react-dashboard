import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { LayoutItem, LayoutItemProps } from './LayoutItem'

/* Types */

export enum LayoutType {
  NONE = 'none',
  FLEX = 'flex',
  GRID = 'grid',
}

/* Context */

interface LayoutContextValue {
  type: LayoutType
}

const LayoutContext = createContext<LayoutContextValue>({ type: LayoutType.NONE })

export const useLayoutContext = () => useContext(LayoutContext)

/* Component */

export type LayoutProps = LayoutItemProps & {
  type: LayoutType
  LayoutComponent: (props: PropsWithChildren) => JSX.Element
}

export const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { type, LayoutComponent, children } = props

  const value = useMemo(() => ({ type }), [type])

  return (
    <LayoutItem {...props}>
      <LayoutContext.Provider value={value}>
        <LayoutComponent>{children}</LayoutComponent>
      </LayoutContext.Provider>
    </LayoutItem>
  )
}
