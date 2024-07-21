import CloseIcon from '@mui/icons-material/Close'
import { IconButton, useTheme } from '@mui/material'
import React from 'react'

export interface DialogCloseButtonProps {
  onClick: () => void
  sx?: object
}

export const DialogCloseButton = (props: DialogCloseButtonProps) => {
  const { onClick, sx } = props
  const theme = useTheme()

  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        ...sx,
      }}
    >
      <CloseIcon />
    </IconButton>
  )
}
