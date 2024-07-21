import { Button, ButtonProps, Icon, Tooltip } from '@mui/material'
import { isFunction, isNil, merge } from 'lodash'
import React, { MouseEvent, MouseEventHandler } from 'react'
import { useFormContext } from 'react-hook-form'
import { useLabels } from '../../helpers/labels'
import { getLayoutItemProps, LayoutItem, LayoutItemProps } from '../../layout/LayoutItem'
import { ActionType } from './types/ActionType'
import { IconName } from './types/IconName'

const emptyFunction = () => null

export const useActionOnClick = (
  action: ActionType | ((e: MouseEvent) => void),
): MouseEventHandler => {
  if (isFunction(action)) return action

  const formContext = useFormContext()
  if (isNil(formContext)) return emptyFunction
  const { handleSubmit, reset, clearErrors } = formContext
  switch (action as ActionType) {
    case 'submit':
      return handleSubmit(emptyFunction)
    case 'reset':
      return reset
    case 'clear':
      return () => clearErrors()
    case 'default':
    default:
      return emptyFunction
  }
}

export interface ActionPropsToInherit extends LayoutItemProps {
  name: string
  action: ActionType | ((e: MouseEvent) => void)
  icon?: IconName
  disabled?: boolean
  slotProps?: {
    button?: Partial<ButtonProps>
  }
}

export interface ActionProps extends ActionPropsToInherit {
  variant: ButtonProps['variant']
  color: ButtonProps['color']
}

export const Action = (props: ActionProps) => {
  const { variant, color, name, icon, disabled, action, slotProps = {} } = props
  const { button = {} } = slotProps
  const layoutItemProps = getLayoutItemProps(props)

  const { getLabel, isKeySet } = useLabels(name)
  const onClick = useActionOnClick(action)

  const startIcon = icon ? <Icon>{icon}</Icon> : undefined

  let tooltipLabel = ''
  if (disabled) {
    tooltipLabel = isKeySet('tooltip_disabled') ? getLabel('tooltip_disabled') : ''
  } else {
    tooltipLabel = isKeySet('tooltip') ? getLabel('tooltip') : ''
  }

  return (
    <LayoutItem {...layoutItemProps}>
      <Tooltip title={tooltipLabel}>
        <span>
          <Button
            {...merge(
              {},
              {
                name,
                variant,
                color,
                startIcon,
                disabled,
                onClick,
              },
              button,
            )}
          >
            {getLabel('label')}
          </Button>
        </span>
      </Tooltip>
    </LayoutItem>
  )
}

export const getActionProps = <Props extends ActionPropsToInherit>(
  props: Props,
): ActionPropsToInherit => {
  const { name, icon, disabled, action, slotProps } = props
  return { name, icon, disabled, action, slotProps, ...getLayoutItemProps(props) }
}
