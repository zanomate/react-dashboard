export const validationFactory =
  <Type>(name: string, apply: boolean, condition: (v: Type) => boolean) =>
  (value: Type) => {
    if (apply && !condition(value)) {
      return name
    }
    return true
  }
