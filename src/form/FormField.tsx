import { FormControl, FormHelperText } from '@mui/material'
import { PropsWithChildren } from 'react'
import { useFormState } from 'react-hook-form'
import { GlobalError } from 'react-hook-form/dist/types/errors'
import { useLabels } from '../helpers/labels'
import { getLayoutItemProps, LayoutItem, LayoutItemProps } from '../layout/LayoutItem'

export interface FormFieldPropsToInherit<Type> extends LayoutItemProps {
  name: string
  required?: boolean
  validations?: { name: string; test: (value: Type) => boolean }[]
  disabled?: boolean
}

export interface FormFieldProps<Type> extends FormFieldPropsToInherit<Type> {}

export const FormField = <Type extends any>(props: PropsWithChildren<FormFieldProps<Type>>) => {
  const { name, required, disabled, children } = props
  const layoutItemProps = getLayoutItemProps(props)

  const { getLabel, isKeySet } = useLabels(props.name)
  const { errors } = useFormState()
  const error: GlobalError | undefined = errors[name]
  const hasError = Boolean(error)
  const errorLabel = getLabel(String(error?.type)) || String(error?.type)

  return (
    <LayoutItem {...layoutItemProps}>
      <FormControl fullWidth disabled={disabled} error={hasError}>
        <FormHelperText sx={{ fontWeight: '600' }}>
          {isKeySet('label') ? getLabel('label') : name}
          {required && '*'}
        </FormHelperText>
        {children}
        <FormHelperText>{hasError ? errorLabel : ''}</FormHelperText>
      </FormControl>
    </LayoutItem>
  )
}

export const getFormFieldProps = <Type extends any, Props extends FormFieldPropsToInherit<Type>>(
  props: Props,
): FormFieldPropsToInherit<Type> => {
  const { name, required, validations, disabled } = props
  return { name, required, validations, disabled, ...getLayoutItemProps(props) }
}
