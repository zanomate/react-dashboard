import { OutlinedInput } from '@mui/material'
import { isEmpty } from 'lodash'
import { useController } from 'react-hook-form'
import { useLabels } from '../../helpers/labels'
import { FormField, FormFieldPropsToInherit, getFormFieldProps } from '../FormField'
import { validationFactory } from '../helpers/validation'

export interface TextInputProps extends FormFieldPropsToInherit<string> {
  defaultValue?: string
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

export const TextInput = (props: TextInputProps) => {
  const { defaultValue, minLength, maxLength, pattern } = props
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
        minLength: validationFactory(
          'minLength',
          minLength !== undefined,
          (value: string) => isEmpty(value) || value?.length >= minLength,
        ),
        maxLength: validationFactory(
          'maxLength',
          maxLength !== undefined,
          (value: string) => isEmpty(value) || value?.length <= maxLength,
        ),
        pattern: validationFactory(
          'pattern',
          pattern !== undefined,
          (value: string) => isEmpty(value) || pattern.test(value),
        ),
      },
    },
  })

  return (
    <FormField {...formFieldProps}>
      <OutlinedInput
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
