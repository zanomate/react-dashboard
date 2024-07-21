import React from 'react'
import { Action, ActionPropsToInherit, getActionProps } from './Action'

export interface CancelActionProps extends ActionPropsToInherit {}

export const CancelAction = (props: CancelActionProps) => {
  const actionProps = getActionProps(props)

  return <Action variant="text" color="primary" {...actionProps} />
}
