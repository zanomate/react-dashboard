import { createContext, useContext } from 'react'
import { UseFormProps } from 'react-hook-form'

export interface ReactHookFormConfig {
  useForm: UseFormProps
}

export interface GlobalConfigContextValue {
  reactHookForm: ReactHookFormConfig
}

export const globalConfigDefaultValue: GlobalConfigContextValue = {
  reactHookForm: {
    useForm: {
      mode: 'onBlur',
    },
  },
}

export const GlobalConfigContext = createContext<GlobalConfigContextValue>(globalConfigDefaultValue)

export const useGlobalConfig = () => useContext(GlobalConfigContext)
