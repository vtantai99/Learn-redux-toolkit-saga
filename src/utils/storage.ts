export const getLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || 'false')

export const setLocalStorage = (name: string, value: any) =>
  localStorage.setItem(name, JSON.stringify(value))

export const removeLocalStorage = (name: string) => localStorage.removeItem(name)

export const clearLocalStorage = () => localStorage.clear()