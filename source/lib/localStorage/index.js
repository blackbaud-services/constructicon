export const setLocalStorageItem = (key, val) => {
  try {
    const { localStorage } = window
    const serializedValue = JSON.stringify(val)
    localStorage.setItem(key, serializedValue)
  } catch (err) {}
}

export const getLocalStorageItem = (key) => {
  try {
    const { localStorage } = window
    const serializedValue = localStorage.getItem(key)
    if (serializedValue === null) {
      return undefined
    }
    return JSON.parse(serializedValue)
  } catch (err) {
    return undefined
  }
}
