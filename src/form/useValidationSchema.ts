import { useCallback, useMemo, useState } from 'react'
import * as yup from 'yup'

export interface FieldConfig<Type> {
  name: string
  initialValue: Type
  schema: yup.Schema<Type>
}

export interface CrossFieldTestConfig<Values> {
  name: string
  test: (values: Values) => boolean
}

export const useValidationSchema = () => {
  const [v, setV] = useState(0)
  const [fields, setFields] = useState<{ [name: string]: FieldConfig<any> }>({})
  const [crossFieldTests, setCrossFieldTests] = useState<{
    [name: string]: CrossFieldTestConfig<any>
  }>({})

  const registerField = useCallback(
    <Type, Schema extends yup.Schema<Type>>(name: string, initialValue: Type, schema: Schema) => {
      setFields((prev) => ({ ...prev, [name]: { name, initialValue, schema } }))
      setV((p) => (p + 1) % 1000)
    },
    [],
  )

  const registerCrossFieldTest = useCallback(
    <Values>(name: string, test: (values: Values) => boolean) => {
      setCrossFieldTests((prev) => ({ ...prev, [name]: { name, test } }))
      setV((p) => (p + 1) % 1000)
    },
    [],
  )

  const initialValues = useMemo(
    () =>
      Object.values(fields).reduce(
        (res, fieldConfig) => ({ ...res, [fieldConfig.name]: fieldConfig.initialValue }),
        {},
      ),
    [v],
  )

  const validationSchema = useMemo(() => {
    let schema = yup
      .object()
      .shape(
        Object.values(fields).reduce<yup.ObjectShape>(
          (shape, fieldConfig) => ({ ...shape, [fieldConfig.name]: fieldConfig.schema }),
          {},
        ),
      )
    Object.values(crossFieldTests).forEach((testConfig) => {
      schema = schema.test(testConfig.name, testConfig.name, (values) => {
        if (testConfig.test(values))
          return new yup.ValidationError(testConfig.name, '', testConfig.name)
        return true
      })
    })
    return schema
  }, [v])

  return { v, initialValues, validationSchema, registerField, registerCrossFieldTest }
}
