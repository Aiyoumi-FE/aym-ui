export function setComponentName(oldName, prefix = '') {
  oldName = String(oldName)
  const pureName = oldName.replace(/^m-/i, '')
  if (prefix) {
    prefix = `${prefix}-`
  }
  // const newName = oldName.replace(/^m-/i, `${prefix}-`)
  return `${prefix}${pureName}`
}
