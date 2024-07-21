import React from 'react'
import { Action, ActionPropsToInherit, getActionProps } from './Action'

export interface PrimaryActionProps extends ActionPropsToInherit {
  positive?: boolean
  negative?: boolean
}

export const PrimaryAction = (props: PrimaryActionProps) => {
  const actionProps = getActionProps(props)

  const variant = (() => {
    if (props.positive) return 'outlined'
    if (props.negative) return 'outlined'
    return 'contained'
  })()

  const color = (() => {
    if (props.positive) return 'success'
    if (props.negative) return 'error'
    return 'primary'
  })()

  return <Action variant={variant} color={color} {...actionProps} />
}
