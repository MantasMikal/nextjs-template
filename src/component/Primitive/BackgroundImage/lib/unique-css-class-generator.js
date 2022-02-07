const generateUniqueCssClass = (string) => {
  const trimLength = 20
  const safeString = string.replace(/\W/g, '')
  return `BackgroundImage-${safeString.substring(
    safeString.length - trimLength,
    trimLength
  )}`
}

export default generateUniqueCssClass
