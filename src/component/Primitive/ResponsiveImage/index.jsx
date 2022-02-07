import React from 'react'
import { arrayOf, number, oneOf, shape, string } from 'prop-types'

const srcSetFormatter = (srcSet) => {
  return srcSet.map((image) => `${image.src} ${image.width}w`).join(', ')
}

const ResponsiveImage = ({
  alt,
  height,
  loading,
  sizes,
  src,
  srcSet,
  width
}) => (
  <img
    alt={alt}
    width={width}
    height={height}
    loading={loading}
    src={src}
    sizes={sizes && sizes.join(',')}
    srcSet={srcSet && srcSetFormatter(srcSet)}
  />
)

ResponsiveImage.propTypes = {
  alt: string.isRequired,
  height: number.isRequired,
  loading: oneOf(['auto', 'eager', 'lazy']),
  sizes: arrayOf(string),
  src: string.isRequired,
  srcSet: arrayOf(shape({ width: number.isRequired, src: string.isRequired })),
  width: number.isRequired
}

export default ResponsiveImage
