export class Store<Type> {
  type: Type

  _lastId: number = 0

  _listeners: { id: number; listener: (newValue: Type) => void }[] = []

  constructor(initialValue: Type) {
    this.type = initialValue
  }

  set(newValue: Type) {
    this.type = newValue
    this._listeners.forEach(({ listener }) => listener(newValue))
  }

  subscribe(listener: (newValue: Type) => void) {
    const id = this._lastId++
    this._listeners.push({ id, listener })
    return () => {
      this._listeners = this._listeners.filter((l) => l.id !== id)
    }
  }
}
