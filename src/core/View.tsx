import { createContext, ReactNode, useContext, useMemo } from 'react'
import { Part } from './Part'

export enum ViewType {
  NONE = 'none',
  GRID = 'grid',
}

interface ViewContextValue {
  type: ViewType
}

const ViewContext = createContext<ViewContextValue>({ type: ViewType.NONE })

export const useViewContext = () => useContext(ViewContext)

export interface ViewProps {
  name: string
  type?: ViewType
  children?: ReactNode
}

/**
 * @deprecated
 */
export const View = (props: ViewProps) => {
  const { name, type = ViewType.NONE, children } = props

  const value = useMemo(() => ({ type }), [type])

  return (
    <ViewContext.Provider value={value}>
      <Part name={name}>{children}</Part>
    </ViewContext.Provider>
  )
}
