import { ButtonProps, Dialog as MuiDialog, DialogTitle as MuiDialogTitle } from '@mui/material'
import { View, ViewProps } from '../../core/View'
import { useDialog } from './dialogsManager'
import { useLabels } from '../../helpers/labels'
import { DialogCloseButton } from './DialogCloseButton'

export interface DialogActionConfig {
  color?: ButtonProps['color']
  // onClick: (dialog: DialogContext) => void
}

export interface DialogProps extends ViewProps {
  closeIcon?: boolean
  actions?: DialogActionConfig[]
}

const DialogContent = (props: DialogProps) => {
  const { name, type, closeIcon, children } = props

  const { getLabel } = useLabels(name)
  const { close } = useDialog(name)

  return (
    <View name={name} type={type}>
      <MuiDialogTitle>
        {getLabel('title')}
        {closeIcon && <DialogCloseButton onClick={close} />}
      </MuiDialogTitle>
      {children}
    </View>
  )
}

export const Dialog = (props: DialogProps) => {
  const { name, type, closeIcon, children } = props

  const { isOpen } = useDialog(name)

  return (
    <MuiDialog open={isOpen}>
      <DialogContent name={name} type={type} closeIcon={closeIcon}>
        {children}
      </DialogContent>
    </MuiDialog>
  )
}
