import { Alert, AlertProps } from '@mui/material'
import { merge } from 'lodash'
import { useFormContext, useWatch } from 'react-hook-form'
import { useLabels } from '../helpers/labels'
import { getLayoutItemProps, LayoutItem, LayoutItemProps } from '../layout/LayoutItem'

export type AlertHandleProps = Pick<AlertProps, 'action' | 'severity' | 'onClose' | 'variant'>

export interface FormAlertProps extends LayoutItemProps, AlertHandleProps {
  name: string
  condition: (...depsValues: any[]) => boolean
  dependsOn: string[]
  slotProps?: {
    alert?: Partial<AlertProps>
  }
}

export const FormAlert = (props: FormAlertProps) => {
  const { name, condition, dependsOn, slotProps = {} } = props
  const layoutItemProps = getLayoutItemProps(props)
  const { action, severity = 'error', onClose, variant } = props
  const alertProps = merge(slotProps.alert, { action, severity, onClose, variant })

  const { getLabel } = useLabels()
  const { formState } = useFormContext()
  const values = useWatch({ name: dependsOn })

  const areAllDepsTouched =
    formState.touchedFields && dependsOn.every((dep) => formState.touchedFields[dep])
  const isError = condition(...values)

  return (
    <LayoutItem {...layoutItemProps}>
      {areAllDepsTouched && isError && <Alert {...alertProps}>{getLabel(name)}</Alert>}
    </LayoutItem>
  )
}
