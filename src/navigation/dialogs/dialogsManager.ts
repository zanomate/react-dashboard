import { create } from 'zustand'
import { usePartName } from '../../core/Part'

interface DialogState<Params> {
  name: string
  isOpen: boolean
  isActive: boolean
  params: Params
}

interface DialogsManagerState {
  openDialogs: DialogState<unknown>[]
  open(name: string): void
  open<Params = unknown>(name: string, params: Params): void
  // open: <Params = unknown>(name: string, params: Params) => void
  active: (name: string) => void
  setParams: <Params = unknown>(name: string, params: Params) => void
  close: (name: string) => void
  get: <Params = unknown>(name: string) => DialogState<Params>
}

export const useDialogsManager = create<DialogsManagerState>((set, get) => ({
  openDialogs: [],
  open: <Params = unknown>(name: string, params?: Params) => {
    if (get().openDialogs.some((dialog) => dialog.name === name && dialog.isOpen)) return
    set((state) => ({ openDialogs: [...state.openDialogs, { name, isOpen: true, isActive: true, params }] }))
  },
  active: (name: string) => {
    set((state) => ({
      openDialogs: state.openDialogs.map((dialog) => ({ ...dialog, isActive: dialog.name === name })),
    }))
  },
  setParams: <Params = unknown>(name: string, params: Params) => {
    set((state) => ({
      openDialogs: state.openDialogs.map((dialog) => (dialog.name === name ? { ...dialog, params } : dialog)),
    }))
  },
  close: (name: string) => {
    set((state) => ({ openDialogs: state.openDialogs.filter((dialog) => dialog.name !== name) }))
  },
  get: <Params = unknown>(name: string) => {
    const dialog = get().openDialogs.find((openDialog) => openDialog.name === name)
    if (dialog !== undefined) return dialog as DialogState<Params>
    return { name, isOpen: false, isActive: false, params: undefined }
  },
}))

export const useDialog = <Params = unknown>(name: string) => {
  const partName = usePartName(name)
  const { open, active, setParams, close, get } = useDialogsManager()
  const state = get<Params>(partName)

  return {
    params: state.params,
    isOpen: state.isOpen,
    isActive: state.isActive,
    open: (params: Params) => open(partName, params),
    active: () => active(partName),
    setParams: (params: Params) => setParams(partName, params),
    close: () => close(partName),
  }
}
