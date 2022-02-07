const sassKeysToArray = (keys) =>
  keys ? keys.replace(/"/g, '').split(', ') : []

export default sassKeysToArray
