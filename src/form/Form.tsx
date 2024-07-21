import { merge } from 'lodash'
import React, { PropsWithChildren } from 'react'
import { FieldValues, FormProvider, useForm, UseFormProps } from 'react-hook-form'
import { useGlobalConfig } from '../config/config'
import { getPartProps, Part, PartProps } from '../core/Part'

export interface FormProps<Values extends FieldValues = FieldValues> extends PartProps {
  onSubmit: (values: Values) => void
  config?: {
    useForm?: UseFormProps<Values>
  }
}

export const Form = <Values = any,>(props: PropsWithChildren<FormProps<Values>>) => {
  const { onSubmit, config = {}, children } = props
  const partProps = getPartProps(props)

  const globalConfig = useGlobalConfig()
  const methods = useForm(merge({}, globalConfig.reactHookForm.useForm, config.useForm))

  return (
    <Part {...partProps}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          {children}
        </form>
      </FormProvider>
    </Part>
  )
}
