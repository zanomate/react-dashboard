import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

interface PartContextValue {
  name: string
}

export const PartContext = createContext<PartContextValue>({ name: '' })

export interface PartProps {
  name: string
  // actions: { [name: string]: Function }
}

export const Part = (props: PropsWithChildren<PartProps>) => {
  const { name, children } = props

  const upperPart = useContext(PartContext)
  const composedName = upperPart.name ? `${upperPart.name}.${name}` : name

  const value = useMemo(() => ({ name: composedName }), [name])

  return <PartContext.Provider value={value}>{children}</PartContext.Provider>
}

export const getPartProps = <Props extends PartProps>(props: Props): PartProps => {
  const { name } = props
  return { name }
}

export const usePartName = (name?: string) => {
  const part = useContext(PartContext)
  if (part.name && name) return `${part.name}.${name}`
  if (part.name) return part.name
  return name || ''
}
