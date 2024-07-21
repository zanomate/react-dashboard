import { create } from 'zustand'

export interface ActionsManagerState {
  actions: { [name: string]: Function }
  register: <Action extends Function>(name: string, action: Action) => void
  get: <Action extends Function>(name: string) => Action
}

export const actionsManager = create<ActionsManagerState>((set, get) => ({
  actions: {},
  register: <Action extends Function>(name: string, action: Action) => {
    set((state) => ({
      actions: { ...state.actions, [name]: action },
    }))
  },
  get: <Action extends Function>(name: string) => {
    const { actions } = get()
    return actions[name] as Action
  },
}))
