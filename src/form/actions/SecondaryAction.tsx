import React from 'react'
import { Action, ActionPropsToInherit, getActionProps } from './Action'

export interface SecondaryActionProps extends ActionPropsToInherit {}

export const SecondaryAction = (props: SecondaryActionProps) => {
  const actionProps = getActionProps(props)

  return <Action variant="outlined" color="primary" {...actionProps} />
}
