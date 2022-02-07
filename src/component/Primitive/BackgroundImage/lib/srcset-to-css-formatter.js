const srcSetToCss = ({ uniqueClass, srcSet = [] }) => {
  if (!srcSet.length) return
  return srcSet
    .map((media) => {
      return `
      @media all and (min-width: ${media.width}px) {
        .${uniqueClass} {
          background-image: url(${media.src});
        }
      }
    `
    })
    .join('')
}

export default srcSetToCss
