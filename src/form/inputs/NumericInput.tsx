import { OutlinedInput } from '@mui/material'
import { isEmpty } from 'lodash'
import { useController } from 'react-hook-form'
import { useLabels } from '../../helpers/labels'
import { FormField, FormFieldPropsToInherit, getFormFieldProps } from '../FormField'
import { validationFactory } from '../helpers/validation'

export interface NumericInputProps extends FormFieldPropsToInherit<number> {
  defaultValue?: number
  min?: number
  max?: number
  positive?: boolean
  negative?: boolean
  integer?: boolean
}

export const NumericInput = (props: NumericInputProps) => {
  const { defaultValue, min, max, positive, negative, integer } = props
  const formFieldProps = getFormFieldProps(props)

  const { getLabel, isKeySet } = useLabels(formFieldProps.name)

  const { field } = useController({
    name: formFieldProps.name,
    defaultValue,
    rules: {
      validate: {
        required: validationFactory(
          'required',
          formFieldProps.required,
          (value: string) => !isEmpty(value),
        ),
        min: validationFactory(
          'min',
          min !== undefined,
          (value: string) => isEmpty(value) || (!Number.isNaN(value) && Number(value) >= min),
        ),
        max: validationFactory(
          'max',
          max !== undefined,
          (value: string) => isEmpty(value) || (!Number.isNaN(value) && Number(value) <= max),
        ),
        positive: validationFactory(
          'positive',
          positive,
          (value: string) =>
            !positive || isEmpty(value) || (!Number.isNaN(value) && Number(value) >= 0),
        ),
        negative: validationFactory(
          'negative',
          negative,
          (value: string) =>
            !negative || isEmpty(value) || (!Number.isNaN(value) && Number(value) <= 0),
        ),
        integer: validationFactory(
          'integer',
          integer,
          (value: string) =>
            !integer || isEmpty(value) || (!Number.isNaN(value) && Number.isInteger(Number(value))),
        ),
      },
    },
  })

  return (
    <FormField {...formFieldProps}>
      <OutlinedInput
        type="number"
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        inputRef={field.ref}
        placeholder={isKeySet('placeholder') ? getLabel('placeholder') : ''}
      />
    </FormField>
  )
}
