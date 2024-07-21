import { Icon, IconButton, IconButtonProps } from '@mui/material'
import { merge } from 'lodash'
import React, { MouseEvent } from 'react'
import { getLayoutItemProps, LayoutItem, LayoutItemProps } from '../../layout/LayoutItem'
import { useActionOnClick } from './Action'
import { ActionType } from './types/ActionType'
import { IconName } from './types/IconName'

export interface IconActionProps extends LayoutItemProps {
  name: string
  icon: IconName
  disabled?: boolean
  positive?: boolean
  negative?: boolean
  type?: ActionType
  onClick?: (e: MouseEvent) => void
  slotProps?: {
    iconButton?: Partial<IconButtonProps>
  }
}

export const IconAction = (props: IconActionProps) => {
  const { name, icon, disabled, positive, negative, type, onClick, slotProps = {} } = props
  const { iconButton = {} } = slotProps
  const layoutItemProps = getLayoutItemProps(props)

  const handleClick = useActionOnClick(type, onClick)

  const color = (() => {
    if (positive) return 'success'
    if (negative) return 'error'
    return 'default' // 'inherit' | 'default' | 'primary'
  })()

  return (
    <LayoutItem {...layoutItemProps}>
      <IconButton
        size="small"
        {...merge({}, iconButton, {
          name,
          disabled,
          color,
          onClick: handleClick,
        })}
      >
        <Icon>{icon}</Icon>
      </IconButton>
    </LayoutItem>
  )
}
