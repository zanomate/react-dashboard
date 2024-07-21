import { useTranslation } from 'react-i18next'
import { usePartName } from '../core/Part'

type TType = ReturnType<typeof useTranslation>['t']
type ExceptFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never
type OtherParams = ExceptFirst<Parameters<TType>>

export const useLabels = (base?: string) => {
  const { t, i18n } = useTranslation()
  const partName = usePartName(base)

  const getFullKey = (key: string) => `${partName}.${key}`
  const isKeySet = (key: string) => i18n.exists(getFullKey(key))
  const getLabel = (key: string, ...otherArgs: OtherParams) => t(getFullKey(key), ...otherArgs)

  return { getLabel, isKeySet }
}
